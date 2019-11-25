import React from "react";
import EmotionFrameProvider from "./emotion/FrameProvider";
import StyledComponentsFrameProvider from "./styled-components/FrameProvider";
import {
	__DEFAULT_STYLED,
	EMOTION,
	STYLED_COMPONENTS,
	getLibType
} from "./utils";

export { default as EmotionFrameProvider } from "./EmotionFrameProvider";
export { default as StyledComponentsFrameProvider } from "./StyledComponentsFrameProvider";
export { default as OwnerDocumentProvider } from "./OwnerDocumentProvider";

const Providers = {
	[EMOTION]: EmotionFrameProvider,
	[STYLED_COMPONENTS]: StyledComponentsFrameProvider
};

/**
 * Provides the correct document.head to mount the <style> tag for
 * either Emotion or Styled Components. This is necessary when rendering
 * CSS-in-JS generated styles within elements like iFrames on runtime.
 */
export default function FrameProvider({
	children = null,
	type = __DEFAULT_STYLED,
	...restProps
}) {
	const libType = getLibType(type);
	const Provider = Providers[libType];

	return <Provider {...restProps}>{children}</Provider>;
}
