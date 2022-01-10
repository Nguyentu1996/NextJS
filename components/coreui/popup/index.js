import ReactDOM from "react-dom";
function Popup() {
    const popup = <></>
     return ReactDOM.createPortal(
      popup
      ,
      document.getElementById("root")
    );
}
export default Popup