import { createReducer, on } from "@ngrx/store";
import { toggleProductCode } from "./product.action";
import { Product } from "src/app/products/product";

export interface ProductState{
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[]
}
const initialState: ProductState = {
    showProductCode: false,
    currentProduct: null,
    products: []
};

export const productReducer = createReducer(
    initialState,
    on(toggleProductCode, state => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);