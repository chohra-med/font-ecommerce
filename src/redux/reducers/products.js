import {FETCH_PRODUCTS} from "../actionTypes";
import _ from 'lodash';
import initialState from '../initialState';

export default (state = initialState.products, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                displayedProducts: action.payload
            }
                ;

        default:
            return state;
    }
};
