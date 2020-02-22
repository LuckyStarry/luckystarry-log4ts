export interface Logger {
  Debug(message: string, extra?: { [key: string]: any }): void
  Info(message: string, extra?: { [key: string]: any }): void
  Warning(message: string, extra?: { [key: string]: any }): void
  Error(message: string, extra?: { [key: string]: any }): void
}
