import {FETCH_PRODUCTS, LOAD_MORE_PRODUCTS} from "../actionTypes";
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
                displayedProducts: state.displayedProducts.concat(action.payload)
            };


        default:
            return state;
    }
};
