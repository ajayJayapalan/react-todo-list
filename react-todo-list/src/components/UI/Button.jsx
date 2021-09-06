const Button = (props) => {
  return (
    <>
      <button
        {...props}
        className={`px-3 py-1 rounded text-white mx-1 ${props.className}`}
        type={props.type || "button"}
      >
        {props.label}
      </button>
    </>
  );
};

export default Button;
