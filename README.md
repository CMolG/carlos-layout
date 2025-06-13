![NPM Version](https://img.shields.io/npm/v/carlos-layout)
![NPM Downloads](https://img.shields.io/npm/dw/carlos-layout)
![NPM License](https://img.shields.io/npm/l/carlos-layout)

# carlos-layout

`carlos-layout` is a lightweight component library for React and Next.js. It ships layout utilities, text elements, and animations powered by Tailwind CSS and framer-motion.

## Requirements

- React `>=18.2.0`

Install it in your project if you don't have it yet:

```bash
npm i react
# or
yarn add react
```

## Installation

```bash
npm install carlos-layout
# or
yarn add carlos-layout
```

## Table of Contents

- [Quick Start](#quick-start)
- [Components](#components)
  - [BaseLayout](#baselayout)
  - [Container](#container)
  - [Modal](#modal)
  - [RootPage](#rootpage)
  - [Text Components](#text-components)
  - [Animations](#animations)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

## Quick Start

```jsx
import {
  BaseLayout,
  Container,
  Title,
  Paragraph,
  Article,
  AnimationWrapper,
} from 'carlos-layout';

function App() {
  return (
    <BaseLayout preset="brutal">
      <Container style={{ width: '80%' }}>
        <Title>Hello world</Title>
        <Article>
          <Paragraph>Article content.</Paragraph>
        </Article>
        <AnimationWrapper animationType="fadeIn">
          <p>Appears with animation.</p>
        </AnimationWrapper>
      </Container>
    </BaseLayout>
  );
}
```

## Components

### BaseLayout

Wrap your entire application. Set a font, apply style **presets**, and enable a layout test mode to visualize boundaries.

```jsx
<BaseLayout font="'Inter', sans-serif" preset="brutal" testLayout>
  {...content}
</BaseLayout>
```

### Container

Create sections or organize blocks. Accepts styles and the `aspectRatio` option to maintain proportions.

```jsx
<Container aspectRatio="16/9" style={{ backgroundColor: '#eee' }}>
  {...content}
</Container>
```

### Modal

Simple dialog box that closes when clicking outside or pressing `Esc`.

```jsx
<Modal isOpen={open} onClose={() => setOpen(false)}>
  <Title>Title</Title>
  <Paragraph>Modal body</Paragraph>
</Modal>
```

### RootPage

Automatically loads metadata from a JSON file or by page id.

```jsx
<RootPage pageId="home">
  {...content}
</RootPage>
```

### Text Components

- **Title** – Main heading.
- **Paragraph** – Justified paragraphs.
- **Article** – Styled container for grouping text.

```jsx
<Article>
  <Title>My title</Title>
  <Paragraph>First paragraph...</Paragraph>
</Article>
```

### Animations

`AnimationWrapper` applies predefined animations to its content. Available types: `fadeIn`, `slideUp`, `zoomIn`, `rotate`, `bounce`, and `default`.

```jsx
<AnimationWrapper animationType="zoomIn" config={{ duration: 0.5 }}>
  <img src="logo.png" alt="logo" />
</AnimationWrapper>
```

## Contributing

1. Fork the repository.
2. Create a branch for your feature `git checkout -b my-change`.
3. Make your modifications and run `npm run build` to compile.
4. Submit your *pull request*.

## Authors

- **Carlos Molina Galindo** – [CMolG](https://github.com/CMolG)

See the list of [contributors](https://github.com/CMolG/carlos-layout/contributors) for more information.

## License

Distributed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
