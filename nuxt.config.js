import config from './config'
import routes from './pages/routes'

export default {
  target: 'static',

  modern: !config.isDev && 'client',

  components: false,

  loading: false,

  telemetry: false,

  globalName: config.nuxt.globalName,

  dir: {
    static: 'public'
  },

  server: {
    port: config.server.port,
    host: config.server.hostname
  },

  watch: ['~/config/*', '~/tailwind.config.js'],

  modules: ['@nuxtjs/pwa', '@nuxtjs/svg', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/netlify-files',
    'nuxt-font-loader',
    'nuxt-gsap-module',
    'nuxt-lazysizes'
  ],

  css: ['~/assets/styles/main.css'],

  plugins: ['~/plugins/locomotiveScroll.client.js'],

  /**
   * @link https://github.com/nuxt/nuxt.js/issues/6028
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  head: {
    htmlAttrs: {
      lang: config.app.lang
    },

    /**
     * Corrects the page title when routes have a delayed transition
     * @link https://github.com/nuxt/vue-meta/issues/621
     */
    title: null,
    titleTemplate: null,

    meta: [
      {
        hid: 'charset',
        charset: config.app.charset
      },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: config.app.description
      },
      {
        hid: 'robots',
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      }
    ]
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',

    extendRoutes() {
      return routes
    }
  },

  build: {
    publicPath: config.nuxt.publicPath,

    extractCSS: true,

    templates: [
      {
        src: 'templates/app.html',
        dst: 'views/app.template.html'
      }
    ],

    postcss: {
      plugins: {
        'postcss-import': true,
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  generate: {
    dir: 'dist',
    fallback: true // Error 404 page
  },

  publicRuntimeConfig: {
    app: {
      url: config.app.url,
      name: config.app.name,
      title: config.app.title,
      titleSeparator: config.app.titleSeparator,
      titleTemplate: config.app.titleTemplate,
      description: config.app.description,
      type: config.app.type
    },
    breakpoints: config.breakpoints
  },

  privateRuntimeConfig: {},

  pwa: {
    icon: {
      source: 'assets/favicons/icon.png',
      sizes: [64, 192, 512]
    },

    meta: {
      author: config.app.author
    },

    manifest: {
      name: config.app.name,
      short_name: config.app.shortName,
      description: config.app.description,
      lang: config.app.lang,
      theme_color: config.app.themeColor,
      background_color: config.app.backgroundColor
    }
  },

  robots: {
    UserAgent: () => ['*'],
    Sitemap: () => [`${config.app.url}/sitemap.xml`]
  },

  sitemap: {
    hostname: config.app.url,
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },

  netlifyFiles: {
    copyExistingFiles: false,

    netlifyToml: {
      headers: [
        {
          for: '/*',
          values: {
            'Referrer-Policy': 'origin',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block'
          }
        },
        {
          for: `${config.nuxt.publicPath}*`,
          values: {
            'Cache-Control': 'public, max-age=31536000, immutable'
          }
        },
        {
          for: '/sw.js',
          values: {
            'Cache-Control': 'no-cache'
          }
        },
        {
          for: '/favicon.ico',
          values: {
            'Cache-Control': 'public, max-age=86400'
          }
        }
      ],

      redirects: [
        {
          from: `${config.app.baseUrl}/*`,
          to: `${config.app.url}/:splat`,
          status: 301
        }
      ]
    }
  },

  fontLoader: {
    url: '/fonts/font-face.css'
  }
}
