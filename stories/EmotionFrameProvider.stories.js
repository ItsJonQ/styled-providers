import React from "react";
import styled from "@emotion/styled";
import Frame from "react-frame-component";
import { FrameProvider } from "../src/emotion";

export default {
	title: "Emotion|FrameProvider"
};

export const _default = () => (
	<Frame>
		<FrameProvider>
			<Component>Emotion</Component>
		</FrameProvider>
	</Frame>
);

const Component = styled.div`
	background: blue;
`;
