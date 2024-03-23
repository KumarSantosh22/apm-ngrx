import { createReducer, on } from "@ngrx/store";
import { toggleProductCode } from "./product.action";

export const productReducer = createReducer(
    { showProductCode: true },
    on(toggleProductCode, state => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);