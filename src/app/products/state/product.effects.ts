import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import { loadProducts, loadProductsSuccess } from "./product.action";
import { map, mergeMap } from "rxjs";

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    loadProducts$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loadProducts),
                mergeMap(action =>
                    this.productService.getProducts().pipe(
                        map(products => loadProductsSuccess({ products }))
                    ))
            );
        }
    );
}