import {
    FETCH_PRODUCTS,
    AD_PRODUCTS,
    FETCH_WAITING_LIST,
    LOAD_MORE_PRODUCTS,
    NEXT_PAGE,
    NEW_SORT
} from "../actionTypes";


export const fetchProductsAction = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
});
export const fetchWaitingListAction = (payload = []) => ({
    type: FETCH_WAITING_LIST,
    payload
});

export const addDisplayProductsAction = (payload) => ({
    type: AD_PRODUCTS,
    payload,
});

export const loadMoreDataAction = () => ({
    type: LOAD_MORE_PRODUCTS,
});

export const nextPageAction = () => ({
    type: NEXT_PAGE,
});
export const newSortAction = (payload) => ({
    type: NEW_SORT,
    payload,
});

