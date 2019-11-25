import React from "react";
import styled from "@emotion/styled";
import { ScopeProvider } from "../src/emotion";

export default {
	title: "Emotion|ScopeProvider"
};

export const _default = () => (
	<ScopeProvider scope="html">
		<Component>Emotion</Component>
	</ScopeProvider>
);

const Component = styled.div`
	background: blue;
`;
