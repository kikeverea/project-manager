import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { dasherize } from "./util.ts";

describe('dasherize', () => {

  test("dasherizes normal text", async () => {
    const dasherized_1 = dasherize('normal text')
    const dasherized_2 = dasherize('normal   text NORMAL')
    const dasherized_3 = dasherize('normaltext')

    expect(dasherized_1).toBe('normal-text')
    expect(dasherized_2).toBe('normal-text-normal')
    expect(dasherized_3).toBe('normaltext')
  })

  test("dasherizes camel case", async () => {
    const dasherized_1 = dasherize('CamelCase')
    const dasherized_2 = dasherize('camelCaseCase')
    const dasherized_3 = dasherize('camelCaseD')

    expect(dasherized_1).toBe('camel-case')
    expect(dasherized_2).toBe('camel-case-case')
    expect(dasherized_3).toBe('camel-case-d')
  })

  test("dasherizes snake case", async () => {
    const dasherized_1 = dasherize('snake_case')
    const dasherized_2 = dasherize('SNAKE_CASE')
    const dasherized_3 = dasherize('snake__case_case')
    const dasherized_4 = dasherize('_snake_case_')

    expect(dasherized_1).toBe('snake-case')
    expect(dasherized_2).toBe('snake-case')
    expect(dasherized_3).toBe('snake-case-case')
    expect(dasherized_4).toBe('_snake-case_')
  })

  test("dasherizes mixed cases", async () => {
    const dasherized_1 = dasherize('CamelAnd snake_case')

    expect(dasherized_1).toBe('camel-and-snake-case')
  })
})