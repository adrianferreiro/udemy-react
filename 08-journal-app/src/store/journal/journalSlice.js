import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: '',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [] //arreglo de urls
        // }
    },
    reducers: {
        //acordate que acá solo síncronos. para las funciones asíncronas usamos los thunks
        addNewEmptyNote:(state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {
            
        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) =>{

        }
    }
});
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,

 } = journalSlice.actions;