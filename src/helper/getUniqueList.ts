import { ArrayObjectsProps } from "../interfaces"
export const getUniqueList = (arr: ArrayObjectsProps[]) => {
  const ids = arr.map((o: ArrayObjectsProps) => o.id)
  const filtered = arr.filter(
    ({ id }: ArrayObjectsProps, index: number) => !ids.includes(id, index + 1),
  )
  return filtered
}
