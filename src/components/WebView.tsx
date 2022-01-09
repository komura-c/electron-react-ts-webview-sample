import { useState, useRef } from "react";

export function WebView(): JSX.Element {
  const defaultViewURL = "https://google.com";
  const [viewURL, setViewURL] = useState(defaultViewURL);
  const textRef = useRef<HTMLInputElement>(null);

  function handleLoadPage() {
    const inputTextValue = textRef.current?.value ?? defaultViewURL;
    setViewURL(inputTextValue);
  }

  return (
    <>
      <div className="header">
        <input className="url-input" ref={textRef} type="text" />
        <button className="url-button" type="button" onClick={handleLoadPage}>
          ロード
        </button>
      </div>
      <webview
        className="webview"
        src={viewURL}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-ignore */
        autosize="on"
      ></webview>
    </>
  );
}
