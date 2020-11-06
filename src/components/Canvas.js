import React from "react";
import useCanvas from "../hooks/useCanvas";

const Canvas = (props) => {
  const { draw, options, ...rest } = props;
  const { context, ...moreConfig } = options;
  const Ref = useCanvas(draw, { context });

  return <canvas ref={Ref} {...rest} />;
};

export default Canvas;
