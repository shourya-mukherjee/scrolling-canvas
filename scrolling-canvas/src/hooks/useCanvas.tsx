import { useEffect, useRef } from "react";

const useCanvas = (draw) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      setTimeout(() => {
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
        console.log(frameCount, animationFrameId);
      }, 50);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
