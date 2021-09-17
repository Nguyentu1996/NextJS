import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Overlay({ show, hide }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, [show]);


  const overlay = <>
    <div className={`overlay ${show ? 'active' : ''} `} onClick={hide} />
  </>;
  if (isBrowser) {
    return ReactDOM.createPortal(
      overlay
      ,
      document.getElementById("root")
    );
  } else {
    return null;
  }
}
export default Overlay