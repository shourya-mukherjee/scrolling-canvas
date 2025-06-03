import React from "react";
import useCanvas from "../hooks/useCanvas";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

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
      ref={canvasRef}
      {...rest}
    />
  );
};
export default Canvas;
