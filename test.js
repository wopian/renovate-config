const { migrateAndValidate } = require('renovate/dist/config/migrate-validate')

describe('@wopian/renovate-config', () => {
  let pkg, config

  beforeEach(() => {
    pkg = require('./package.json')
    config = pkg['renovate-config']
  })

  function checkConfig(name) {
    describe(name, () => {
      it('exists', () => {
        expect(typeof config[name]).toBe('object')
      })

      it('is a valid config', async () => {
        expect.assertions(2)
        const { errors, warnings } = await migrateAndValidate({}, config[name])
        expect(errors).toEqual([])
        expect(warnings).toEqual([])
      })
    })
  }

  it('has a renovate config', () => {
    expect(typeof config).toBe('object')
  })

  checkConfig('default')
})
