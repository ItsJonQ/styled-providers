# ✨ Styled Providers

[![Build Status](https://travis-ci.org/ItsJonQ/styled-providers.svg?branch=master)](https://travis-ci.org/ItsJonQ/styled-providers)

> Handy Providers for Emotion / Styled Components

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Requirements](#requirements)
-   [Usage](#usage)
    -   [Emotion](#emotion)
    -   [Styled Components](#styled-components)
-   [Components](#components)
    -   [FrameProvider](#frameprovider)
    -   [ScopeProvider](#scopeprovider)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save-dev styled-providers
```

## Requirements

-   [React v16.8.0+](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
-   [Emotion v10+](https://emotion.sh/docs/migrating-to-emotion-10) **or** [Styled Components v5+](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987)

## Usage

[Emotion](https://emotion.sh/) and [Styled Components](https://www.styled-components.com/) are supported.

### Emotion

```jsx
import React from "react";
import styled from "@emotion/styled";
import { ScopeProvider } from "styled-providers/emotion";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<div id="#app">
			<ScopeProvider scope="#app">
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
import { ScopeProvider } from "styled-providers/styled-components";

const View = styled.div`
	background: blue;
`;

const App = () => {
	return (
		<div id="#app">
			<ScopeProvider scope="#app">
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
import { FrameProvider } from "styled-providers/emotion";
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
import { ScopeProvider } from "styled-providers/emotion";

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
