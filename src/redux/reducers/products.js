import {AD_PRODUCTS, FETCH_PRODUCTS, FETCH_WAITING_LIST, LOAD_MORE_PRODUCTS, NEW_SORT, NEXT_PAGE} from "../actionTypes";
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
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        case NEW_SORT:
            return {
                ...state,
                sort: action.payload,
                page: 3,
            };
        case AD_PRODUCTS:
            return {
                ...state,
                dispalyedAds: [...state.dispalyedAds,action.payload],
            };


        default:
            return state;
    }
};
