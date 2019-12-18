import {FETCH_PRODUCTS, FETCH_WAITING_LIST, LOAD_MORE_PRODUCTS} from "../actionTypes";
import _ from 'lodash';
import initialState from '../initialState';

export default (state = initialState.products, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                displayedProducts: action.payload
            };
        case LOAD_MORE_PRODUCTS:
            return {
                ...state,
                displayedProducts: state.displayedProducts.concat(state.waitingListProducts)
            };
        case FETCH_WAITING_LIST:
            return {
                ...state,
                waitingListProducts: action.payload
            };


        default:
            return state;
    }
};
