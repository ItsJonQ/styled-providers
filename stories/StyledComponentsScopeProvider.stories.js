import React from "react";
import styled from "styled-components";
import { ScopeProvider } from "../src/styled-components";

export default {
	title: "StyledComponents|ScopeProvider"
};

export const _default = () => (
	<ScopeProvider scope="html">
		<Component>StyledComponents</Component>
	</ScopeProvider>
);

const Component = styled.div`
	background: blue;
`;
