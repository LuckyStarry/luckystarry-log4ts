import { Logger } from './logger'
import { LoggerConsole } from './logger-console'
import { LoggerFactory } from './logger-factory'

export class DefaultLoggerFactory extends LoggerFactory {
  public constructor() {
    super()
  }
  private factories = new Map<string, (type: string) => Logger>()
  private _default: (type: string) => Logger = name => new LoggerConsole(name)
  public GetLogger<T>(type: { new (...args): T } | string): Logger {
    let name = ''
    if (typeof type === 'string') {
      name = type
    } else {
      name = type.name
    }
    let factory = this.factories.get(name) || this._default
    return factory(name)
  }

  public Register(name: string, factory: (type: string) => Logger) {
    this.factories.set(name, factory)
  }

  public get Default(): (type: string) => Logger {
    return this._default
  }

  public UseDefault(type: { new (name: string): Logger }) {
    this._default = name => new type(name)
  }
}
