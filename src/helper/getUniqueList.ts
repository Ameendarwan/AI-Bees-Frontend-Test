export const getUniqueList = (arr: any) => {
  const ids = arr.map((o: any) => o.id);
  const filtered = arr.filter(
    ({ id }: any, index: number) => !ids.includes(id, index + 1)
  );
  return filtered;
};
