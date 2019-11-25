import React from "react";
import { StyleSheetManager } from "styled-components";
import OwnerDocumentProvider from "../OwnerDocumentProvider";

/**
 * Provides Styled Components with the correct document.head to mount the
 * <style> tag.
 */
export default function EmotionFrameProvider({ children }) {
	return (
		<OwnerDocumentProvider>
			{({ ownerDocument }) => (
				<StyleSheetManager target={ownerDocument.head}>
					{children}
				</StyleSheetManager>
			)}
		</OwnerDocumentProvider>
	);
}
