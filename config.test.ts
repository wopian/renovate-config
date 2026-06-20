import { describe, expect, it } from 'bun:test'
import { migrateAndValidate } from 'renovate/dist/config/migrate-validate'
import config from './default.json'

describe('@wopian/renovate-config', () => {
  it('has a renovate config', () => {
    expect(typeof config).toBe('object')
  })

  it('is a valid config', async () => {
    const { errors, warnings } = await migrateAndValidate({}, config)

    expect(errors).toEqual([])
    expect(warnings).toEqual([])
  })
})
