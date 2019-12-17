import {
    FETCH_PRODUCTS,
    DISPLAY_PRODUCTS,
    FETCH_WAITING_LIST, LOAD_MORE_PRODUCTS
} from "../actionTypes";



export const fetchProductsAction = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
});
export const fetchWaitingListAction = (payload) => ({
    type: FETCH_WAITING_LIST,
    payload,
});

export const addDisplayProductsAction = (payload) => ({
    type: DISPLAY_PRODUCTS,
    payload,
});

export const loadMoreDataAction = (payload) => ({
    type: LOAD_MORE_PRODUCTS,
    payload,
});

