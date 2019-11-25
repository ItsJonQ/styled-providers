export const EMOTION = "emotion";
export const STYLED_COMPONENTS = "styled-components";
export const __DEFAULT_STYLED = EMOTION;

export const LIB_TYPES = {
	emo: EMOTION,
	emotion: EMOTION,
	styled: STYLED_COMPONENTS,
	sc: STYLED_COMPONENTS,
	"styled-components": STYLED_COMPONENTS,
	"styled components": STYLED_COMPONENTS
};

/**
 * Determines the library, given a type.
 */
export function getLibType(type = __DEFAULT_STYLED) {
	return LIB_TYPES[type] || __DEFAULT_STYLED;
}
