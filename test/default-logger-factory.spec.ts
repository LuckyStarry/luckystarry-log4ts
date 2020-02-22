/* tslint:disable */
import { expect } from 'chai'
import { DefaultLoggerFactory } from '../src/default-logger-factory'
import { Logger } from '../src/logger'
import { LoggerConsole } from '../src/logger-console'

describe('Index', function() {
  it('默认情况下，以 LoggerConsole 为默认日志工具', function() {
    let factory = new DefaultLoggerFactory()
    let logger = factory.GetLogger('test')
    expect(logger).not.null
    expect(logger).not.undefined
    expect(logger).instanceof(LoggerConsole)
  })

  it('使用类型作为参数时，Logger 名称为类型名', function() {
    let factory = new DefaultLoggerFactory()
    expect(factory.GetLogger(Foo)['type']).is.equal('Foo')
    expect(factory.GetLogger(Bar)['type']).is.equal('Bar')
  })

  it('注册指定类型的 Logger 后，该类型会返回指定的 Logger 类型', function() {
    let factory = new DefaultLoggerFactory()
    factory.Register('Foo', type => new TestLogger(type))
    expect(factory.GetLogger(Foo)).is.instanceof(TestLogger)
    expect(factory.GetLogger(Bar)).is.instanceof(LoggerConsole)
  })

  it('LoggerFactory.Default 取值正确', function() {
    let factory = new DefaultLoggerFactory()
    expect(factory.Default('test')).is.instanceof(LoggerConsole)
    factory.Register('Foo', type => new TestLogger(type))
    expect(factory.Default('test')).is.instanceof(LoggerConsole)
    factory.UseDefault(TestLogger)
    expect(factory.Default('test')).is.instanceof(TestLogger)
  })
})

class Foo {}
class Bar {}

class TestLogger implements Logger {
  public constructor(name: string) {
    // TODO
  }
  Debug(message: string): void {
    throw new Error('Method not implemented.')
  }
  Info(message: string): void {
    throw new Error('Method not implemented.')
  }
  Warning(message: string): void {
    throw new Error('Method not implemented.')
  }
  Error(message: string): void {
    throw new Error('Method not implemented.')
  }
}
