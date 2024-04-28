import {createSlice} from '@reduxjs/toolkit'

interface drug {
    Error: null | boolean | {},
    Loading: boolean | string,
    singleDrug: {
        name: string | null,
        image: string | null,
        description: string | null,
        category: string | null,
        subCategory: string | null,
        price: number | null,
        countInStock: number | null,
        prescriptionRequired: Boolean | null
    } | null
   
}

const initialState: drug = {
    singleDrug: null,
    Loading: false,
    Error: null
}

export const singleDrugSlice = createSlice({
    name: 'drug',
    initialState,
    reducers: {
        StartInLoading: (state)=>{
            state.Loading = true
        },
        FetchSingleDrug: (state, action)=>{
            state.singleDrug = action.payload;
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
})
export const {
    StartInLoading, FetchSingleDrug,  StartInFailure,  EndInLoading
} = singleDrugSlice.actions;
export default singleDrugSlice.reducer;