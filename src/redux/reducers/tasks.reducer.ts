import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  plans: [],
  showAddForm: false,
  planId: null,
  foodId: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setShowAddForm: (state, action) => {
      const { visibility, planId } = action.payload;
      state.showAddForm = visibility;
      state.planId = planId || null;
    },
  },
});

export const { setShowAddForm } = tasksSlice.actions;

export default tasksSlice.reducer;
