export interface Iroute {
    path: string
    element: any
    protected: boolean
    name: string
    display: boolean
    background: string
}

export interface IModal {
    modal: string
    path: string
    background: string
}

export interface Items {
    rayon: string
    products: IProduct[]
}

export interface IProduct {
    name: string
    checked: boolean
    id: string
}

export interface ItemsState {
    products: IProduct[]
    rayon: string
}

export interface IListState {
    rayon: IListName
    products: IListProducts[]
}

export interface IListName {
    name: string
    id: string
}

export interface IListProducts {
    product: string
    id: string
}