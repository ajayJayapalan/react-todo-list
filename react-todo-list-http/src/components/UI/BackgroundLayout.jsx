const BackgroundLayout = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      style={{ background: "rgba(1, 1, 1, 0.7)" }}
      className="fixed z-10 top-0 left-0 w-full h-full"
    ></div>
  );
};

export default BackgroundLayout;
