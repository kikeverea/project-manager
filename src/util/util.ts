export const dasherize = (str: string): string => {

  const removeSnakeAndSpaces =
    (match: string, index: number) => `${index === 0 || index === str.length - 1 ? match : '-'}`

  const removeCamel =
    (match: string, index: number) => `${index > 0 ? '-' : ''}${match.toLowerCase()}`

  const dasherized = str.trim().replace(/[\s_]+/g, removeSnakeAndSpaces)
  const isCamelCase = dasherized.match(/([a-z])([A-Z])/g)

  return isCamelCase
   ? dasherized.replace(/[A-Z]/g, removeCamel)
   : dasherized.toLowerCase()
}