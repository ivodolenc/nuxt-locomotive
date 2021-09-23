import defu from 'defu'
import defaults from './default'
import development from './development'
import production from './production'

const environment = defaults.isDev ? development : production
const config = defu({}, environment, defaults)

export default config
