import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
