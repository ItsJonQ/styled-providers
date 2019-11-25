import React from "react";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import OwnerDocumentProvider from "../OwnerDocumentProvider";

const memoizedCreateCacheWithContainer = weakMemoize(container => {
	let newCache = createCache({ container });
	return newCache;
});

/**
 * Provides Emotion with the correct document.head to mount the <style> tag.
 */
export default function EmotionFrameProvider({ children }) {
	return (
		<OwnerDocumentProvider>
			{({ ownerDocument }) => (
				<CacheProvider
					value={memoizedCreateCacheWithContainer(ownerDocument.head)}
				>
					{children}
				</CacheProvider>
			)}
		</OwnerDocumentProvider>
	);
}
