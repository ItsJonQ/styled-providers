import React, { useState, useEffect, useRef } from "react";

/**
 * Provides the closest document given where the React component rendered.
 */
export default function OwnerDocumentProvider({ children }) {
	const [ownerDocument, setOwnerDocument] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			setOwnerDocument(ref.current.ownerDocument);
		}
	}, [ref, setOwnerDocument]);

	return (
		<React.Fragment>
			{!ref.current ? <div ref={ref} /> : children({ ownerDocument })}
		</React.Fragment>
	);
}
