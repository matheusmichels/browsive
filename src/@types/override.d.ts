import { IpcRenderer, Remote } from 'electron';

export {};

declare global {
  interface Window {
    remote: Remote;
    ipcRenderer: IpcRenderer;
  }

  interface HTMLWebViewElement {
    src: string;
    getWebContentsId: () => number;
    setUserAgent: (userAgent: string) => void;
    canGoBack: () => boolean;
    canGoForward: () => boolean;
    goBack: () => void;
    goForward: () => void;
  }

  interface Event {
    message: string;
  }
}
