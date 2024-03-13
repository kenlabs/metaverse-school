# Metaverse School

[![CircleCI](https://circleci.com/gh/mvschool-dev/mvschool.dev/tree/main.svg?style=svg)](https://circleci.com/gh/kenlabs/metaverse-school/tree/main)

This repository contains code and content for the [Metaverse School](https://mvschool.dev) website, an open-source community education platform devoted to core concepts, best practices, tutorials, showcases and so on.

## For site developers

### Build and run locally

This site is built in [Vuepress](https://vuepress.vuejs.org/guide/), and uses Vue/JavaScript for functional code and Markdown for post content.

To build a local copy, run the following:

1. Clone this repository:

   ```bash
   git clone git@github.com:mvschool-dev/mvschool.dev.git
   ```

1. Move into the `mvschool.dev` folder and install the NPM dependencies:

   ```bash
   cd mvschool.dev
   npm install
   ```

1. Boot up the application in _dev mode_:

   ```bash
   npm start
   ```

1. Open [localhost:8080](http://localhost:8080) in your browser.
1. Close the local server with `CTRL` + `c`.
1. To restart the local server, run `npm start` from within the `metaverseschool` folder.

### PR and preview

Once you're happy with your local changes, please make a PR **against the `main` branch**. Including detailed notes on your PR - particularly screenshots to depict any changes in UI - will help speed up approval and deployment.

A reviewer will be by shortly to have a look!

## Maintainers

This site's codebase is under active maintenance by members of the core team at [KEN Labs](https://kenlabs.io/).

## License

All software code is copyright (c) KEN Labs, Inc. under the **[MIT](LICENSE) license**. Other written documentation and content is copyright (c) Protocol Labs, Inc. under the [**Creative Commons Attribution-Share-Alike License**](https://creativecommons.org/licenses/by/4.0/).
