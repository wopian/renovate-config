declare module 'renovate/dist/config/migrate-validate' {
  type Config = Record<string, unknown>

  interface ValidatedConfig extends Config {
    errors: unknown[]
    warnings: unknown[]
  }

  export function migrateAndValidate(
    config: Config,
    input: Config,
  ): Promise<ValidatedConfig>
}
