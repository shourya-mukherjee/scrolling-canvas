import "./App.css";
import Canvas from "./components/Canvas";
import React, { useState, useCallback, useEffect } from "react";

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
function App() {
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = useCallback((e) => {
    console.log("Mouse down");
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);

    // Initialize drawing
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
  }, []);

  const draw = useCallback(
    (e) => {
      if (!isDrawing) return;
      console.log("Drawing");

      const canvas = e.target;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.lineTo(x, y);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();
    },
    [isDrawing]
  );

  const stopDrawing = useCallback(() => {
    console.log("Stop drawing");
    setIsDrawing(false);
  }, []);

  // Initialize canvas size
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  return (
    <Canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
}

export default App;
