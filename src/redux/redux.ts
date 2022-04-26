import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { category } from "../config/category";

interface IProduct {
    name: string
    checked: boolean
}

export interface ItemsState {
    products: IProduct[]
    rayon: string
}


const initialState: ItemsState[] = []


const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        initState: (state, action) => {
            console.log('State before init', state)
            state = action.payload
            console.log('State apres init', state)
            return state
        },
        addItem: (state, action) => {
            let rayon = checkRayonProduct(action.payload)
            let newProduct: {
                name: string
                checked: boolean
            } = {
                name: action.payload,
                checked: false
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
        toggleItem: () => { },
        deleteItem: () => { }
    }
})

const checkRayonProduct = (product: string) => {
    let res: string = 'autre'
    category.map(rayon => (
        res = rayon.products.includes(product) ? rayon.name : res
    ))
    return res
}

export const { initState, addItem, toggleItem, deleteItem } = courseSlice.actions


export default courseSlice.reducer