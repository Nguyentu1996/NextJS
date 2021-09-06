import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Overlay ({show}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
    const overlay = show ?  <div className={'overlay active'}/> : null;
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