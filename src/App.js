import React from "react";
import Canvas from "./components/Canvas";
import resizeCanvas from "./hooks/resizeCanvas";
import "./styles.css";

export default function App() {
  const draw = (ctx, frameCount) => {
    resizeCanvas(ctx);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="App">
      <h1>Canvas component</h1>
      <Canvas draw={draw} options={{}} />
    </div>
  );
}
