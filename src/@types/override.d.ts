export {};

declare global {
  interface Window {
    remote: any;
    ipcRenderer: any;
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
