import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    faculties: [],
    years: [],
    models: [],
    courses: [],
    teachers: [],
    links: [],
    files: [],
    videos: [],
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
        setLinks: (state, { payload: links }) => {
            state.links = links;
        },
        setFiles: (state, { payload: files }) => {
            state.files = files;
        },
        setVideos: (state, { payload: videos }) => {
            state.videos = videos;
        },
    }
})

export const modelsActions = modelsSlice.actions;
export default modelsSlice.reducer;