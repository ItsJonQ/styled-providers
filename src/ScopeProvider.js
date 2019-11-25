import React from "react";
import EmotionScopeProvider from "./emotion/ScopeProvider";
import StyledComponentsScopeProvider from "./styled-components/ScopeProvider";
import {
	__DEFAULT_STYLED,
	EMOTION,
	STYLED_COMPONENTS,
	getLibType
} from "./utils";

export { default as EmotionScopeProvider } from "./EmotionScopeProvider";
export { default as StyledComponentsScopeProvider } from "./StyledComponentsScopeProvider";

const Providers = {
	[EMOTION]: EmotionScopeProvider,
	[STYLED_COMPONENTS]: StyledComponentsScopeProvider
};

/**
 * Provides a scope to prefix before generated classNames for either
 * Emotion or Styled Components. Prefixing increases specificity, allowing
 * for smoother integrations with pre-existing CSS rules.
 */
export default function ScopeProvider({
	children = null,
	scope = "",
	type = __DEFAULT_STYLED,
	...restProps
}) {
	const libType = getLibType(type);
	const Provider = Providers[libType];

	return (
		<Provider scope={scope} {...restProps}>
			{children}
		</Provider>
	);
}
