const Card = (props) => {
  return (
    <div
      style={props.style || {}}
      className={`p-2 pb-4  rounded-lg  ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
