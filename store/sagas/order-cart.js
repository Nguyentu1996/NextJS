import { takeLatest } from "@redux-saga/core/effects";
import sagaHelper from "./saga-helper";
import { GET_ITEM_IN_CART } from '../actions/order-cart'
import { productService } from '../../services/product-service';

export default function* watchFetchData() {
    yield takeLatest(GET_ITEM_IN_CART, sagaHelper({ api: productService.getItemById }))
}
  