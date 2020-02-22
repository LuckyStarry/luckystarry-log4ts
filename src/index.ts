import { DefaultLoggerFactory } from './default-logger-factory'

export { Level } from './level'
export { Logger } from './logger'
export { LoggerFactory } from './logger-factory'
const instance = new DefaultLoggerFactory()
export default instance
