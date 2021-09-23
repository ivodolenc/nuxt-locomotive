export default {
  isDev: process.env.NODE_ENV === 'development',

  nuxt: {
    routerBase: '/',
    globalName: 'nuxt',
    publicPath: '/_nuxt/'
  },

  app: {
    name: 'Nuxt + Locomotive',
    shortName: 'Nuxt Locomotive',
    description:
      'Starter template for parallax effects & smooth scrolling experience',
    author: 'namesurname',

    title: 'Nuxt + Locomotive',
    titleSeparator: ' — ',
    titleTemplate:
      'Starter template for parallax effects & smooth scrolling experience',

    charset: 'utf-8',
    lang: 'en-US',
    locale: 'en_US',
    type: 'website',
    themeColor: '#030303',
    backgroundColor: '#030303'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}
