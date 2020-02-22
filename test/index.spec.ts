/* tslint:disable */
import { expect } from 'chai'
import { DefaultLoggerFactory } from '../src/default-logger-factory'
import factory, { LoggerFactory } from '../src/index'

describe('Index', function() {
  it('存在默认导出', function() {
    expect(factory).not.null
    expect(factory).not.undefined
    expect(typeof factory).to.be.equal('object')
    expect(factory).is.instanceof(DefaultLoggerFactory)
    expect(factory).is.instanceof(LoggerFactory)
  })

  it('存在 LoggerFactory', function() {
    expect(LoggerFactory).not.null
    expect(LoggerFactory).not.undefined
    expect(typeof LoggerFactory).to.be.equal('function')
  })
})
