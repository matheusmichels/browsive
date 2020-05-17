import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import { useDevice } from '../../contexts/device';

interface Props {
  title: string;
  dimensions: {
    width: number;
    height: number;
  };
}

interface WebView extends HTMLWebViewElement {
  src: string;
  getWebContents: () => any;
}

interface NavigationEvent extends Event {
  url: string;
}

const Device: React.FC<Props> = ({ title, dimensions }) => {
  const { url, zoom, setUrl } = useDevice();
  const { width, height } = dimensions;
  const [loading, setLoading] = useState(false);

  let webviewRef: HTMLWebViewElement | null = null;

  useEffect(() => {
    function handleNavigate(e: Event) {
      const event = e as NavigationEvent;
      event.preventDefault();
      setUrl(event.url);
    }

    if (webviewRef) {
      const webview = webviewRef as WebView;
      // webview.addEventListener('update-target-url', console.log);
      webview.addEventListener('will-navigate', handleNavigate);
      webview.addEventListener('did-start-loading', () => setLoading(true));
      webview.addEventListener('did-stop-loading', () => setLoading(false));

      setTimeout(() => {
        webview.getWebContents().executeJavaScript(
          `document.addEventListener("scroll", e => {
              this.top.postMessage({
                x: window.pageYOffset,
                y: window.pageXOffset
              })
            })`,
        );
      }, 1500);

      return () => {
        webview.removeEventListener('will-navigate', handleNavigate);
      };
    }
  }, [setUrl, webviewRef]);

  return (
    <div
      style={{
        position: 'relative',
        width: width * zoom,
        height: height * zoom + 40,
        padding: '10px',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 20, color: '#ccc', marginRight: 10 }}>
          {`${title} - ${width}x${height}`}
        </span>
        <Loader type="TailSpin" color="#fff" visible={loading} width={25} height={25} />
      </div>
      <div
        style={{
          position: 'absolute',
          width,
          height,
          transform: `scale(${zoom})`,
          transformOrigin: 'left top',
          top: 40,
        }}
      >
        <webview
          title={title}
          src={url}
          ref={ref => (webviewRef = ref)}
          style={{
            width,
            height,
            borderRadius: 10,
            backgroundColor: '#fff',
            border: '2px solid #fff',
            position: 'relative',
          }}
        />
      </div>
    </div>
  );
};

export default Device;
