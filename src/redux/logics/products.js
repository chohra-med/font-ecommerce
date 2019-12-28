import axios from "axios";
import {API} from "../../config";
import {
    fetchProductsAction,
    fetchWaitingListAction,
    loadMoreDataAction,
    addDisplayProductsAction,
    nextPageAction
} from "../actions/products";

export const fetchProducts = (sort) => dispatch => {
    dispatch(addDisplayProductsAction(API('/ads/?r=' + Math.floor(Math.random() * 1000))));
    return axios.get(API('products?_page=1&_limit=20', sort)).then(res => {
        dispatch(fetchProductsAction(res.data));
        axios.get(API('products?_page=2&_limit=20', sort)).then(waitingResult => {
            dispatch(fetchWaitingListAction(waitingResult.data));
            return res.data;
        })
    });
};


export const loadMoreData = (page, sort) => dispatch => {
    dispatch(loadMoreDataAction());
    dispatch(nextPageAction());

    return axios.get(API('products?_page=' + page + '&_limit=20', sort)).then(res => {
        dispatch(fetchWaitingListAction(res.data));

        return res.data;
    });
};



