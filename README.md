# MM package starter

Based on [fmph's quark package starter](https://github.com/fm-ph/quark-package-starter).

## Usage

### Basic

Basic example.

```js
import Sharer from 'mm-sharer'

Sharer.facebook("http://www.google.fr");
```

## API

### Sharer.getFacebookURL(url)

Returns Facebook sharing URL

### Sharer.facebook(url)

Opens a popup for sharing on Facebook

### Sharer.getLinkedInURL(url, title = null, description = null)

Returns LinkedIn sharing URL

### Sharer.linkedIn(url, title = null, description = null)

Opens a popup for sharing on LinkedIn

### Sharer.getTwitterURL(text, hashtags = [], url = null)

Returns Twitter sharing URL

### Sharer.twitter(text, hashtags = [], url = null)

Opens a popup for sharing on Twitter

### Sharer.getPinterestURL(media, url = '', desc = '')

Returns Pinterest sharing URL

### Sharer.pinterest(media, url = '', desc = '')

Opens a popup for sharing on Pinterest

### Sharer.openPopup(link, width = this.DEFAULT_POPUP_SIZES.default.width, height = this.DEFAULT_POPUP_SIZES.default.height)

Opens a popup

## Build

To build the sources with `babel` in `./lib` directory :

```sh
npm run build
```

## Documentation

To generate the `JSDoc` :

```sh
npm run docs
```

To generate the documentation and deploy on `gh-pages` branch :

```sh
npm run docs:deploy
```

## Testing

To run the tests, first clone the repository and install its dependencies :

```sh
git clone https://github.com/MM56/mm-sharer.git
cd mm-sharer
npm install
```

Then, run the tests :

```sh
npm test
```

To watch (test-driven development) :

```sh
npm run test:watch
```

For coverage :

```sh
npm run test:coverage
```