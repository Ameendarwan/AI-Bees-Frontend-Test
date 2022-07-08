export const circleButtons = [
  {
    id: 0,
    title: "Low",
    type: "custom__button__circle__green",
    priority: "Low",
    value: true,
  },
  {
    id: 1,
    title: "Medium",
    type: "custom__button__circle__yellow",
    priority: "Medium",
    value: false,
  },
  {
    id: 2,
    title: "High",
    type: "custom__button__circle__red",
    priority: "High",
    value: false,
  },
]

export const normalButtons = [
  {
    id: 0,
    title: "Edit Task",
    action: "edit",
    designType: "custom__button__normal__yellow",
    value: true,
  },
  {
    id: 1,
    title: "Done Task",
    action: "done",
    designType: "custom__button__normal__green",
    value: true,
  },
  {
    id: 2,
    title: "Delete Task",
    action: "delete",
    designType: "custom__button__normal__red",
    value: true,
  },
]

export const editValueConstant = {
  id: 1000000,
  title: "initial",
  description: "",
  priority: "low",
  gifts: "bike",
}
