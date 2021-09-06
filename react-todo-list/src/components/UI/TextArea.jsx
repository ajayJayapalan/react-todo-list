import React, { useImperativeHandle, useRef } from "react";

const TextArea = React.forwardRef((props, ref) => {
  const textAreaRef = useRef();

  const getValue = () => {
    return textAreaRef.current.value;
  };

  const clearValue = () => {
    textAreaRef.current.value = "";
  };

  const setValue = (desc) => {
    textAreaRef.current.value = desc;
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
      <textarea
        ref={textAreaRef}
        {...props}
        rows={props.rows || "4"}
        cols={props.cols || "50"}
      ></textarea>
    </>
  );
});

export default TextArea;
