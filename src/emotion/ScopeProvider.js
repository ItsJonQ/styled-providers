import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import memoize from "@emotion/memoize";
import stylisPluginExtraScope from "stylis-plugin-extra-scope";

const memoizedCreateCacheWithScope = memoize(scope => {
	return createCache({
		stylisPlugins: [stylisPluginExtraScope(scope)]
	});
});

/**
 * Provides Emotion with a scope to prefix before generated classNames.
 * Adding scope increases specificity.
 */
export default function EmotionScopeProvider({
	children = null,
	scope = "",
	...restProps
}) {
	return (
		<CacheProvider
			value={memoizedCreateCacheWithScope(scope)}
			{...restProps}
		>
			{children}
		</CacheProvider>
	);
}
