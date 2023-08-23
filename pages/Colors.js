import { Flex,Input,chakra} from "@chakra-ui/react";
import React from "react";

const Colors = ({ setLineColor, setLineWidth,
	setLineOpacity,lineColor }) => {
	return (
		<Flex alignItems={"center"}
        justifyContent={"center"}
        direction={["column",,"row"]}
        gap={2}>
            <chakra.p >color</chakra.p>
            <Input type="color" onChange={e=>setLineColor(e.target.value)}/>
            <chakra.p>Width</chakra.p>
            <Input type="range" bg={lineColor} min="2" max="30" onChange={e=>setLineWidth(e.target.value)}/>
            <chakra.p>Opacity</chakra.p>
            <Input type="range" min="1" max="100"  bg={lineColor} onChange={e=>setLineOpacity(e.target.value/100)}/>
        </Flex>
	);
};

export default Colors;
