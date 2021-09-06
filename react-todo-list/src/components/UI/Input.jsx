import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getValue = () => {
    return inputRef.current.value;
  };

  const setValue = (title) => {
    inputRef.current.value = title;
  };

  const clearValue = () => {
    inputRef.current.value = "";
  };

  useImperativeHandle(ref, () => {
    return {
      getValue,
      clearValue,
      setValue
    };
  });

  return (
    <>
      <input ref={inputRef} {...props} type={props.type || "text"} />
    </>
  );
});

export default Input;
