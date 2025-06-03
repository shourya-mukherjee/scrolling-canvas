import React from "react";

const Canvas = ({
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseOut,
  ...rest
}) => {
  return (
    <canvas
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseOut={onMouseOut}
      {...rest}
    />
  );
};

export default Canvas;
