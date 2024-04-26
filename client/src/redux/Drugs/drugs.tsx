import {createSlice} from '@reduxjs/toolkit'

interface Iprops {
    people: {
        AllDrugs: null | [],
        Error: null | boolean | {},
        Loading: boolean | string,
    }
}
const initialState: Iprops['people'] = {
    AllDrugs: null,
    Error: null,
    Loading: false,
  };
export const drugSlice = createSlice({
    name: 'drugs',
    initialState,
    reducers: {
        StartInLoading: (state)=>{
            state.Loading = true;
        },
        FetchAll: (state, action)=>{
            state.AllDrugs = action.payload;
            state.Error = false;
        },
        StartInFailure: (state, action)=>{
            state.Loading = false;
            state.Error = action.payload;
        },
        EndInLoading: (state)=>{
            state.Loading = false;
        }
    }
});
export const {
    StartInLoading,  FetchAll,  EndInLoading,  StartInFailure} = drugSlice.actions;
export default drugSlice.reducer;
