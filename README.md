# ✨ Styled Providers

[![Build Status](https://travis-ci.org/ItsJonQ/styled-providers.svg?branch=master)](https://travis-ci.org/ItsJonQ/styled-providers)

> Handy Providers for Emotion / Styled Components

## Installation

```
npm install --save-dev styled-providers
```

## Usage

This project uses [Emotion](https://emotion.sh/) as the default CSS-in-JS library. However, both [Emotion](https://emotion.sh/) and [Styled Components](https://www.styled-components.com/) are supported.

To specify the library, use the `type` prop for the Providers.

### Emotion

```jsx
import React from "react";
import styled from "@emotion/styled";
import { ScopeProvider } from "styled-providers";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<div id="#app">
			<ScopeProvider scope="#app" type="emotion">
				<View />
			</ScopeProvider>
		</div>
	);
};
```

### Styled Components

```jsx
import React from "react";
import styled from "styled-components";
import { ScopeProvider } from "styled-providers";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<div id="#app">
			<ScopeProvider scope="#app" type="styled-components">
				<View />
			</ScopeProvider>
		</div>
	);
};
```

## Components

### FrameProvider

Provides the correct document.head to mount the `<style>` tag for either Emotion or Styled Components. This is necessary when rendering CSS-in-JS generated styles within elements like iFrames on runtime.

##### Example

```jsx
import React from "react";
import styled from "@emotion/styled";
import { FrameProvider } from "styled-providers";
import Frame from "react-frame-component";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<Frame>
			<View />
		</Frame>
	);
};
```

### ScopeProvider

Provides a scope to prefix before generated classNames for either Emotion or Styled Components. Prefixing increases specificity, allowing for smoother integrations with pre-existing CSS rules.

##### Example

```jsx
import React from "react";
import styled from "styled-components";
import { ScopeProvider } from "styled-providers";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<div id="#app">
			<ScopeProvider scope="html #app">
				<View />
			</ScopeProvider>
		</div>
	);
};
```

In the above example, rendered selectors (e.g. `.css-123jda`) will be prefixed with `html #app`, resulting in selectors like `html #app .css-123jda`)
