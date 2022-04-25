export interface Iroute {
    path: string
    element: any
    protected: boolean
    name: string
    display: boolean
}

export interface IModal {
    modal: string
    path: string
}

export interface Items {
    rayon: string
    products: IProduct[]
}

export interface IProduct {
    name: string
    checked: boolean
}