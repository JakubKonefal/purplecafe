import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'
import netlifyAdapter from 'gatsby-adapter-netlify'
import path from 'path'

dotenv.config({
  path: `.env.${
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
  }`,
})

const GATSBY_REQUIRED_RULES: string = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

const SITE_URL = 'https://purplecafeenglish.pl'

const OMIT_PATHS = ['/404', '/preview']

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Purple Cafe English`,
    description: `Purple Cafe English`,
    author: `Jakub Konefał`,
    siteUrl: SITE_URL, // siteUrl is necessary for i18n
  },
  graphqlTypegen: true, // Generates Typescript types for graphql queries
  // Adapter is disabled in Gatsby < 5.12.0
  adapter: netlifyAdapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  flags: {
    // Server-Side render (SSR) pages on full reloads during gatsby develop. This helps you detect SSR bugs and fix them without needing to do full builds with gatsby build. Once enabled, go to your desired page and do a full reload (e.g. Ctrl + R or F5). In starter it is disabled by default, but might be useful in finding hydration issues.
    DEV_SSR: false,
  },
  plugins: [
    // {
    //   resolve: `gatsby-theme-i18n`,
    //   options: {
    //     defaultLang: `pl`,
    //     // If you want to use only pl the safest way is to disable 'en' locale
    //     locales: `pl en`,
    //     configPath: path.resolve(`${__dirname}/src/translation/config.json`),
    //   },
    // },
    // {
    //   resolve: `gatsby-theme-i18n-react-i18next`,
    //   options: {
    //     locales: `./src/translation/locales`,
    //     i18nextOptions: {
    //       // If you want to use only pl the safest way is to disable 'en' locale
    //       supportedLngs: ['pl', 'en'],
    //       ns: I18N_NAMESPACES,
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `${env.WORDPRESS_URL}/graphql`,
    //     html: {
    //       useGatsbyImage: true,
    //       generateWebpImages: true,
    //       generateAvifImages: true,
    //       imageQuality: 60,
    //     },
    //     schema: {
    //       perPage: 9,
    //       requestConcurrency: 3,
    //       previewRequestConcurrency: 2,
    //     },
    //     type: {
    //       MediaItem: {
    //         excludeFieldNames: [
    //           `dateGmt`,
    //           `date`,
    //           `parent`,
    //           `ancestors`,
    //           `comments`,
    //           `author`,
    //           `authorDatabaseId`,
    //           `authorId`,
    //           `commentCount`,
    //           `commentStatus`,
    //           `enclosure`,
    //           `desiredSlug`,
    //           `modified`,
    //           `modifiedGmt`,
    //           `parentId`,
    //           `parentDatabaseId`,
    //         ],
    //         localFile: {
    //           requestConcurrency: 5,
    //         },
    //       },
    //     },
    //     develop: {
    //       nodeUpdateInterval: 10000,
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 60,
          breakpoints: [420, 750, 1080, 1920],
          backgroundColor: `transparent`,
          avifOptions: { lossless: true },
          webpOptions: { lossless: true, force: false },
          jpgOptions: { mozjpeg: true, force: false },
          pngOptions: {
            compressionLevel: 8,
            force: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#663399`,
        minimum: 0.01,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Purple Cafe English`,
        short_name: `Purple Cafe`,
        start_url: `/`,
        background_color: `#e7d0ff`,
        theme_color: `#e7d0ff`,
        display: `minimal-ui`,
        icon: `src/assets/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [GATSBY_REQUIRED_RULES],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        emitWarning: true,
        failOnError: true, // If we just want warnings instead of linting errors, set to false
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     output: '/',
    //     query: `
    //     {
    //       allSitePage {
    //         nodes {
    //           path
    //           component
    //           context: pageContext
    //         }
    //       }
    //     }
    //   `,
    //     resolveSiteUrl: () => SITE_URL,
    //     resolvePages: ({
    //       allSitePage: { nodes: allPages },
    //     }: {
    //       allSitePage: {
    //         nodes: {
    //           path: string
    //           component: string
    //           context: any
    //         }[]
    //       }
    //     }) => {
    //       return allPages
    //         .filter(
    //           (page) =>
    //             !OMIT_PATHS.includes(page.path) &&
    //             !page.path.startsWith('/en') &&
    //             !page.context.isFlatPage
    //         )
    //         .map((el) => {
    //           const isStatic = el.component.includes('pages')
    //           let priority = 0.64
    //           if (el.path === '/') priority = 1
    //           if (isStatic) priority = 0.8
    //           return {
    //             ...el,
    //             priority: priority,
    //           }
    //         })
    //         .sort((a, b) => b.priority - a.priority)
    //     },
    //     serialize: ({ path, priority }: { path: string; priority: number }) => {
    //       return {
    //         url: SITE_URL + path,
    //         priority,
    //       }
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `${SITE_URL}/sitemap-0.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: OMIT_PATHS,
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-no-sourcemaps',
    // },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        dimensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-content-hash',
      options: { build_root_path: `${__dirname}/public` },
    },
    // Plugin is enabled in Gatsby < 5.12.0
    // `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

export default config
