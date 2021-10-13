import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    faculties: [],
    years: [],
    models: [],
    courses: [],
    teachers: [],


}

const modelsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFaculties: (state, { payload: faculties }) => {
            state.faculties = faculties;
        },
        setYears: (state, { payload: years }) => {
            state.years = years;
        },
        setModels: (state, { payload: models }) => {
            state.models = models;
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
        setTeachers: (state, { payload: teachers }) => {
            state.teachers = teachers;
        },
  
    }
})

export const modelsActions = modelsSlice.actions;
export default modelsSlice.reducer;