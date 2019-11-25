import React, { useMemo } from "react";
import stylisPluginExtraScope from "stylis-plugin-extra-scope";
import { StyleSheetManager } from "styled-components";

/**
 * Provides Styled Components with a scope to prefix before generated classNames.
 * Adding scope increases specificity.
 */
export default function StyledComponentsScopeProvider({
	children = null,
	scope = "",
	...restProps
}) {
	const stylisPlugins = useMemo(() => {
		return [stylisPluginExtraScope(scope)];
	}, [scope]);

	return (
		<StyleSheetManager stylisPlugins={stylisPlugins} {...restProps}>
			{children}
		</StyleSheetManager>
	);
}
