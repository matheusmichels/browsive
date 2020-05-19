import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Icon from 'react-fontawesome';

import { useDevice } from '../../contexts/device';
import { useNavigate } from '../../contexts/navigate';
import { Orientation } from '../../@types/orientation.enum';

interface Props {
  title: string;
  userAgent: string;
  mobile?: boolean;
  dimensions: {
    width: number;
    height: number;
  };
}

interface WebView extends HTMLWebViewElement {
  src: string;
  getWebContents: () => { executeJavaScript: (script: string) => void };
  setUserAgent: (userAgent: string) => void;
  canGoBack: () => boolean;
  canGoForward: () => boolean;
  goBack: () => void;
  goForward: () => void;
}

export interface MessageEvent extends Event {
  message: string;
}

const Device: React.FC<Props> = ({ title, userAgent, dimensions, mobile = false }) => {
  const { zoom, scroll, setScroll } = useDevice();
  const { url, setUrl } = useNavigate();
  const [orientation, setOrientation] = useState<Orientation>(Orientation.PORTRAIT);

  const [loading, setLoading] = useState(false);

  let { width, height } = dimensions;

  width = orientation === Orientation.PORTRAIT ? dimensions.width : dimensions.height;
  height = orientation === Orientation.PORTRAIT ? dimensions.height : dimensions.width;

  let webviewRef: HTMLWebViewElement | null = null;

  useEffect(() => {
    if (webviewRef) {
      const webview = webviewRef as WebView;

      webview.addEventListener('console-message', e => {
        const event = e as MessageEvent;
        setScroll(Number(event.message));
      });

      webview.addEventListener('did-start-loading', () => setLoading(true));
      webview.addEventListener('did-stop-loading', () => {
        setLoading(false);
        setUrl(webview.src);
      });

      setTimeout(() => {
        webview.getWebContents().executeJavaScript(
          `
          var timer = null;
          document.addEventListener("scroll", () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => console.log(window.pageYOffset), 200);
          });
          `,
        );
      }, 500);
    }
  }, [setScroll, url, setUrl, webviewRef]);

  useEffect(() => {
    if (webviewRef) {
      const webview = webviewRef as WebView;

      if (webview.getWebContents) {
        webview.getWebContents()?.executeJavaScript(`this.scroll(0, ${scroll})`);
      }
    }
  }, [scroll, webviewRef]);

  function handleChangeOrientation() {
    setOrientation(
      orientation === Orientation.PORTRAIT ? Orientation.LANDSCAPE : Orientation.PORTRAIT,
    );
  }

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
        {mobile ? (
          <Icon
            name="mobile"
            size="2x"
            style={{ color: '#ccc', cursor: 'pointer', marginRight: 10 }}
            onClick={handleChangeOrientation}
          />
        ) : (
          <Icon name="laptop" size="2x" style={{ color: '#ccc', marginRight: 10 }} />
        )}

        <span
          style={{
            fontSize: 20,
            color: '#ccc',
            marginRight: 10,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
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
          // useragent={userAgent}
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
