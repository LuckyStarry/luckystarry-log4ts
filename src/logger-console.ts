import { Logger } from './logger'
import { Level } from './level'

export class LoggerConsole implements Logger {
  private type: string
  public constructor(type: string) {
    this.type = type
  }

  public Debug(message: string): void {
    this.output('DEBUG', message)
  }

  public Info(message: string): void {
    this.output('INFO', message)
  }

  public Warning(message: string): void {
    this.output('WARNING', message)
  }

  public Error(message: string): void {
    this.output('ERROR', message)
  }

  /* istanbul ignore next */
  private output(level: Level, message: string): void {
    switch (level) {
      case 'DEBUG':
        console.debug(
          `${new Date().toLocaleString()} [${level}] ${this.type} - ${message}`
        )
        break
      case 'INFO':
        console.info(
          `${new Date().toLocaleString()} [${level}] ${this.type} - ${message}`
        )
        break
      case 'WARNING':
        console.warn(
          `${new Date().toLocaleString()} [${level}] ${this.type} - ${message}`
        )
        break
      case 'ERROR':
        console.error(
          `${new Date().toLocaleString()} [${level}] ${this.type} - ${message}`
        )
        break
      default:
        console.log(
          `${new Date().toLocaleString()} [${level}] ${this.type} - ${message}`
        )
        break
    }
  }
}
