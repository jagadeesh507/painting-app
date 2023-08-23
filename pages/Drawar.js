import React, { useState,useRef,useEffect } from "react";
import { Flex, Heading,Box, Divider } from "@chakra-ui/react";
import Colors from "./Colors";
function Drawar() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    ctxRef.current.stroke();
  };

  return (

    <Flex justifyContent="center" alignItems="center"  direction={"column"} gap="10">
      <Heading as="h2"mt="12px" pt="5px" color={"#622763"}fontFamily={"cursive"}>Painting app</Heading>
      <Divider/>
      <Box fontSize={"lg"} fontStyle={"oblique"} fontWeight={"semibold"} >
        <Colors 
           lineColor={lineColor}
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}

        />
      </Box>
      <Box
      boxShadow='dark-lg' p='6' rounded='md' bg='white'
      w="800px"
      h="400px"
      border="1px solid green">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          width={"750px"}
          height={"350px"}
          ref={canvasRef}
        />
      </Box>
    </Flex>
  );
}

export default Drawar;
