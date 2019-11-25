import React from "react";
import styled from "styled-components";
import Frame from "react-frame-component";
import { FrameProvider } from "../src/styled-components";

export default {
	title: "StyledComponents|FrameProvider"
};

export const _default = () => (
	<Frame>
		<FrameProvider>
			<Component>StyledComponents</Component>
		</FrameProvider>
	</Frame>
);

const Component = styled.div`
	background: blue;
`;
