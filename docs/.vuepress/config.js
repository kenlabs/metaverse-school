// .vuepress/config.js

const DEPLOY_DOMAIN = 'https://school.kencloud.com'
const SPEEDCURVE_ID = process.env.SPEEDCURVE_ID || ''
const COUNTLY_KEY = process.env.COUNTLY_KEY || ''
const pageSuffix = '/'

module.exports = {
  base: '/',
  head: require('./head'),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Metaverse School',
      description: 'Metaverse School Developer Resources'
    }
  },
  markdown: {
    pageSuffix,
    extendMarkdown: md => {
      md.set({
        breaks: true
      })
      md.use(require('markdown-it-video'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-task-lists'))
      md.use(require('markdown-it-deflist')),
      md.use(require('markdown-it-imsize')),
      md.use(require('markdown-it-image-lazy-loading'))
    }
  },
  themeConfig: {
    defaultImage: '/images/metaverse.png',
    author: {
      name: 'Metaverse School'
    },
    keywords:
      'Metaverse, IPFS, NFT, KEN Labs',
    domain: DEPLOY_DOMAIN,
    docsRepo: 'kenlabs/metaverse-school',
    docsDir: 'docs',
    docsBranch: 'main',
    feedbackWidget: {
      docsRepoIssue: 'kenlabs/metaverse-school'
    },
    editLinks: false,
    // page nav
    nextLinks: false,
    prevLinks: false,
    sidebarDepth: 3,
    // ui/ux
    logo: '/images/metaverse.png',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: require('./nav/en'),
        sidebar: [
          {
            title: 'Prequel',
            collapsable: false,
            children: [
              '/prequel/'
            ]
          },
          {
            title: 'Definition',
            collapsable: false,
            children: [
              '/definition/',
              '/definition/outlierventure/',
              '/definition/matthewball.vc/'
            ]
          },
          {
            title: 'Framework',
            collapsable: false,
            children: 
            [
              '/framework/framework-for-the-metaverse',
              '/framework/hardware',
              '/framework/networking',
              '/framework/compute',
              '/framework/virtual-platforms',
              '/framework/interchange-tools-and-standards',
              '/framework/payments-payment-rails-and-blockchains',
              '/framework/content-services-and-asset-businesses',
              '/framework/evolving-user-and-business-behaviors'
            ]
          },
          {
            title: 'Buidl',
            collapsable: false,
            children: [
              ['/buidl/', 'Introduction'],
              {
                  title: 'Open Metaverse OS',
                  collapsable: false,
                  children: [
                    '/buidl/open-metaverse-os/',
                    '/buidl/open-metaverse-os/hardware-infrastructure/',
                    '/buidl/open-metaverse-os/software-backend/',
                    '/buidl/open-metaverse-os/software-backend/ipfs/',
                    '/buidl/open-metaverse-os/software-backend/filecoin/',
                    '/buidl/open-metaverse-os/software-backend/connecting-the-metaverse-with-ipfs.md',
                    '/buidl/open-metaverse-os/world-primitives-and-rules/',
                    '/buidl/open-metaverse-os/in-world-assets/',
                    '/buidl/open-metaverse-os/end-user-hardware/',
                    '/buidl/open-metaverse-os/end-user-software/',
                    '/buidl/open-metaverse-os/bridges/'
                  ]
              },
              {
                  title: 'Web3 Toolbox',
                  collapsable: false,
                  children: [
                    '/buidl/web3-toolbox/',
                    '/buidl/web3-toolbox/peer-to-peer-networks/',
                    '/buidl/web3-toolbox/transaction-layer/',
                    '/buidl/web3-toolbox/programmability-layer/',
                    '/buidl/web3-toolbox/decentralised-finance/',
                    '/buidl/web3-toolbox/nfts-sovereign-virtual-goods/',
                    '/buidl/web3-toolbox/decentralised-governance/',
                    '/buidl/web3-toolbox/decentralised-cloud-services/',
                    '/buidl/web3-toolbox/self-sovereign-identity/',
                    '/buidl/web3-toolbox/agents/'
                  ]
              }
            ]
          },
          {
            title: 'Resource',
            collapsable: false,
            children: [
              '/resource/'
            ]
          }
        ]
      }
    },
  },
  plugins: [
    [require('./plugins/vuepress-plugin-speedcurve'), { id: SPEEDCURVE_ID }],
    [require('./plugins/vuepress-plugin-countly'), {
      domain: DEPLOY_DOMAIN,
      key: COUNTLY_KEY
    }],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: pageSuffix,
        indexSuffix: pageSuffix,
        notFoundPath: '/ipfs-404.html'
      }
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: ($page, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: ($page, $site) =>
          $page.frontmatter.author || $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page =>
          ['articles', 'posts', 'blog'].some(folder =>
            $page.regularPath.startsWith('/' + folder)
          )
            ? 'article'
            : 'website',
        url: ($page, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) =>
          $page.frontmatter.image
            ? ($site.themeConfig.domain || '') + $page.frontmatter.image
            : ($site.themeConfig.domain || '') + $site.themeConfig.defaultImage,
        publishedAt: $page =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {
          const { $site, image } = context
          add(
            'twitter:site',
            ($site.themeConfig.author && $site.themeConfig.author.twitter) || ''
          )
          add('image', image)
          add('keywords', $site.themeConfig.keywords)
        }
      }
    ],
    [
      'vuepress-plugin-canonical',
      {
        // add <link rel="canonical" header (https://tools.ietf.org/html/rfc6596)
        // to deduplicate SEO across all copies loaded from various public gateways
        baseURL: DEPLOY_DOMAIN
      }
    ],
    [
      'vuepress-plugin-sitemap',
      {
        hostname: DEPLOY_DOMAIN,
        exclude: ['/ipfs-404.html']
      }
    ],
    [
      'vuepress-plugin-robots',
      {
        host: DEPLOY_DOMAIN
      }
    ],
    [
      '@vuepress/html-redirect',
      {
        countdown: 0
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        defaultTitle: ''
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'left',
        defaultTitle: ''
      }
    ],
    'vuepress-plugin-chunkload-redirect',
    'vuepress-plugin-ipfs'
  ],
  extraWatchFiles: ['.vuepress/nav/en.js']
}
