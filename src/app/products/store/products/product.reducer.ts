import { createReducer, on } from "@ngrx/store";
import { toggleProductCode } from "./product.action";
import { Product } from "src/app/products/product";
import * as AppState from "src/app/app.state"

export interface State extends AppState.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[]
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

export const productReducer = createReducer<ProductState>(
    initialState,
    on(toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);