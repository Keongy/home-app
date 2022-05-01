
import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";
import { IListState } from "../interfaces/interface";



const initialState: IListState[] = [
    {
        name: "hello",
        products: [
            "poisson",
            "soupe"
        ]
    }
]


const settingListSlice = createSlice({
    name: 'settingList',
    initialState,
    reducers: {
        addRayon: (state, action) => {
            state.push({
                name: action.payload,
                products: []
            })

            set(ref(getDatabase(), 'homeApp/initList'), {
                list: state
            })
        },
        addItem: (state, action) => {
            state.push({
                name: action.payload,
                products: []
            })

            set(ref(getDatabase(), 'homeApp/initList'), {
                list: state
            })
        },
    }
})



export const { addRayon } = settingListSlice.actions


export default settingListSlice.reducer