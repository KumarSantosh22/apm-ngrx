import { createReducer, on } from "@ngrx/store";
import { clearCurrentProduct, initializeCurrentProduct, setCurrentProduct, toggleProductCode } from "./product.action";
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

    // toggle product code
    on(toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),

    // set current product
    on(setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product
        }
    }),

    // clear current product
    on(clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: null
        };
    }),

    // initialize current product
    on(initializeCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            }
        };
    })
);