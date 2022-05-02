import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";
import { IListState } from "../interfaces/interface";
import { v4 as uuid } from 'uuid';


const initialState: IListState[] = []


const settingListSlice = createSlice({
    name: 'settingList',
    initialState,
    reducers: {
        initList: (state, action) => {
            state = action.payload
            return state
        },
        addRayon: (state, action) => {
            state.push({
                rayon: {
                    name: action.payload,
                    id: uuid()
                },
                products: []
            })

            set(ref(getDatabase(), 'homeApp/initList'), {
                list: state
            })
        },
        addItem: (state, action) => {
            let newProduct = {
                product: action.payload.newItem,
                id: uuid()
            }

            state.map(e => (
                e.rayon.id === action.payload.rayonId ? (
                    e.products ? (
                        e.products.push(newProduct)
                    )
                        :
                        (
                            e.products = [
                                {
                                    product: action.payload.newItem,
                                    id: uuid()
                                }
                            ]
                        )
                ) : null
            ))

            set(ref(getDatabase(), 'homeApp/initList'), {
                list: state
            })
        },
        deleteItem: (state, action) => {

        }
    }
})



export const { initList, addRayon, addItem } = settingListSlice.actions


export default settingListSlice.reducer