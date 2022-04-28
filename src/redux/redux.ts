import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";
import { category } from "../config/category";
import { v4 as uuid } from 'uuid';
import { ItemsState } from "../interfaces/interface";
import { act } from "react-dom/test-utils";





const initialState: ItemsState[] = []


const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        initState: (state, action) => {
            state = action.payload
            return state
        },
        addItem: (state, action) => {
            let rayon = checkRayonProduct(action.payload)
            let newProduct: {
                name: string
                checked: boolean
                id: string
            } = {
                name: action.payload,
                checked: false,
                id: uuid()
            }

            if (!state.length) {
                console.log("ITems vide");
                state.push({
                    rayon: rayon,
                    products: [newProduct]
                })
            } else {
                console.log("ADD ITEMS");
                let findRayon = -1

                state.map((e, index) => (
                    e.rayon === rayon ? (
                        findRayon = index
                    ) : null
                ))

                findRayon === -1 ? (
                    state.push({
                        rayon: rayon,
                        products: [newProduct]
                    })
                )
                    :
                    (
                        state[findRayon].products.push(newProduct)
                    )
            }
            set(ref(getDatabase(), 'homeApp/'), {
                listeCourse: state
            })
        },
        toggleItem: (state, action) => {
            let index: number = state.findIndex(e => e.rayon === action.payload.rayon)
            state[index].products.map(e => (e.id === action.payload.id) ? e.checked = !e.checked : null)

            set(ref(getDatabase(), 'homeApp/'), {
                listeCourse: state
            })
        },
        deleteItem: (state, action) => {
            let index: number = state.findIndex(e => e.rayon === action.payload.rayon)

            if (state[index].products.length > 1) {
                state[index].products.splice(action.payload.index, 1)
            } else {
                state.splice(index, 1)
            }

            set(ref(getDatabase(), 'homeApp/'), {
                listeCourse: state
            })
        }
    }
})

function checkRayonProduct(product: string): string {
    let res: string = 'autre';
    category.map(rayon => (
        res = rayon.products.includes(product) ? rayon.name : res
    ));
    return res;
}

export const { initState, addItem, toggleItem, deleteItem } = courseSlice.actions


export default courseSlice.reducer