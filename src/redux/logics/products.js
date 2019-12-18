import axios from "axios";
import {API} from "../../config";
import {} from "../actions/products";
import {
    fetchProductsAction,
    fetchWaitingListAction,
    loadMoreDataAction,
    addDisplayProductsAction
} from "../actions/products";

export const fetchProducts = () => dispatch => {
    return axios.get(API('products?_page=1&_limit=20')).then(res => {
        dispatch(fetchProductsAction(res.data));
        axios.get(API('products?_page=2&_limit=20')).then(waitingResult => {
            dispatch(fetchWaitingListAction(waitingResult.data));
            return res.data;
        })
    });
};


export const addDisplayProducts = () => dispatch => {
    return axios.get(API('/ads/?r=' + Math.floor(Math.random() * 1000))).then(res => {
        dispatch(addDisplayProductsAction(res.data));
        return res.data;
    });
};
export const loadMoreData = (data) => dispatch => {
    dispatch(loadMoreDataAction());
    return axios.get(API('products?_page=' + data + '&_limit=20')).then(res => {
        dispatch(fetchWaitingListAction(res.data));
        return res.data;
    });
};

export const sortProducts = (data) => dispatch => {
    return axios.get(API('products?_page=' + data.page + '&_limit=20' + '?sort=' + data.sortType)).then(res => {
        dispatch(addDisplayProductsAction(res.data));
        return res.data;
    });
};



