# Metaverse School

[![CircleCI](https://circleci.com/gh/kenlabs/metaverse-school/tree/main.svg?style=svg)](https://circleci.com/gh/kenlabs/metaverse-school/tree/main)

This repository contains code and content for the [Metaverse School](https://metaverseschool.kencloud.com) website, an open-source community education platform devoted to core concepts, best practices, tutorials, showcases and so on.

## For site developers

### Build and run locally

This site is built in [Vuepress](https://vuepress.vuejs.org/guide/), and uses Vue/JavaScript for functional code and Markdown for post content.

To build a local copy, run the following:

1. Clone this repository:

   ```bash
   git clone https://github.com/kenlabs/metaverseschool.git
   ```

1. Move into the `metaverseschool` folder and install the NPM dependencies:

   ```bash
   cd metaverseschool
   npm install
   ```

1. Boot up the application in _dev mode_:

   ```bash
   npm start
   ```

1. Open [localhost:8080](http://localhost:8080) in your browser.
1. Close the local server with `CTRL` + `c`.
1. To restart the local server, run `npm start` from within the `metaverseschool` folder.

## License

All software code is copyright (c) Protocol Labs, Inc. under the **[MIT](LICENSE) license**. Other written documentation and content is copyright (c) Protocol Labs, Inc. under the [**Creative Commons Attribution-Share-Alike License**](https://creativecommons.org/licenses/by/4.0/).
