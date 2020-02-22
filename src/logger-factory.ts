import { Logger } from './logger'

export abstract class LoggerFactory {
  public abstract Register(name: string, factory: (type: string) => Logger)
  public abstract UseDefault(type: { new (name: string): Logger })
  public abstract GetLogger<T>(type: { new (...args): T } | string): Logger
}
