import ReactDOM from "react-dom";

import BackgroundLayout from "../UI/BackgroundLayout";
import Modal from "./Modal";

const Overlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackgroundLayout onConfirm={props.onModal} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal onConfirm={props.onModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Overlay;
