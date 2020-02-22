import { Level } from './level'
import { Logger } from './logger'

export class LoggerConsole implements Logger {
  private type: string
  public constructor(type: string) {
    this.type = type
  }

  public Debug(message: string, extra?: { [key: string]: any }): void {
    this.output('DEBUG', message, extra)
  }

  public Info(message: string, extra?: { [key: string]: any }): void {
    this.output('INFO', message, extra)
  }

  public Warning(message: string, extra?: { [key: string]: any }): void {
    this.output('WARNING', message, extra)
  }

  public Error(message: string, extra?: { [key: string]: any }): void {
    this.output('ERROR', message, extra)
  }

  /* istanbul ignore next */
  private output(
    level: Level,
    message: string,
    extra?: { [key: string]: any }
  ): void {
    let log = `${new Date().toLocaleString()} [${level}] ${
      this.type
    } - ${message}`
    if (extra) {
      log += ` ${JSON.stringify(extra)}`
    }
    switch (level) {
      case 'DEBUG':
        console.debug(log)
        break
      case 'INFO':
        console.info(log)
        break
      case 'WARNING':
        console.warn(log)
        break
      case 'ERROR':
        console.error(log)
        break
      default:
        console.log(log)
        break
    }
  }
}
