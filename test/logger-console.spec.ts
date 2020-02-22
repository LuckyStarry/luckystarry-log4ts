/* tslint:disable */
import { expect } from 'chai'
import { Level } from '../src/level'
import { LoggerConsole } from '../src/logger-console'

describe('Index', function() {
  it('LoggerConsole.Debug', function() {
    let logger = new LoggerConsole('test')
    logger['output'] = function(level: Level, message: string): void {
      expect(level).is.equal('DEBUG')
      expect(message).is.equal('test-message-debug')
    }

    logger.Debug('test-message-debug')
  })

  it('LoggerConsole.Info', function() {
    let logger = new LoggerConsole('test')
    logger['output'] = function(level: Level, message: string): void {
      expect(level).is.equal('INFO')
      expect(message).is.equal('test-message-info')
    }

    logger.Info('test-message-info')
  })

  it('LoggerConsole.Warning', function() {
    let logger = new LoggerConsole('test')
    logger['output'] = function(level: Level, message: string): void {
      expect(level).is.equal('WARNING')
      expect(message).is.equal('test-message-warn')
    }

    logger.Warning('test-message-warn')
  })

  it('LoggerConsole.Error', function() {
    let logger = new LoggerConsole('test')
    logger['output'] = function(level: Level, message: string): void {
      expect(level).is.equal('ERROR')
      expect(message).is.equal('test-message-error')
    }

    logger.Error('test-message-error')
  })
})
