export const getObjectWithoutKey = <T extends object>(obj: T, keyToRemove: keyof T) => {
  const newObj = { ...obj }
  delete newObj[keyToRemove]
  return newObj
}
