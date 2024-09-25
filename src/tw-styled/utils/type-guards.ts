export const isType = <T extends string>(key: string, guard: T) => {
  function checkType(key: string, guard: T): key is T {
    return key.includes(guard);
  }

  return checkType(key, guard);
};
