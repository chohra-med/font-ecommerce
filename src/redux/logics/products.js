import axios from "axios";
import {API} from "../../config";
import {
} from "../actions/products";
import {fetchProductsAction,fetchWaitingListAction,loadMoreDataAction,addDisplayProductsAction} from "../actions/products";

export const fetchProducts = () => dispatch => {
    return axios.get(API('products')).then(res => {
        dispatch(fetchProductsAction(res.data));
        return res.data;
    });
};

export const fetcWaitingList = () => dispatch => {
    return axios.get(API('products')).then(res => {
        dispatch(fetchWaitingListAction(res.data));
        return res.data;
    });
};

export const addDisplayProducts = () => dispatch => {
    return axios.get(API('products')).then(res => {
        dispatch(addDisplayProductsAction(res.data));
        return res.data;
    });
};
export const loadMoreData = (data) => dispatch => {
    console.log('here');
    return axios.get(API('products?_page='+data+'&_limit=30')).then(res => {
        dispatch(loadMoreDataAction(res.data));
        return res.data;

    });
};

export const sortProducts = (data) => dispatch => {
    return axios.get(API('products')+'?sort='+data).then(res => {
        dispatch(addDisplayProductsAction(res.data));
        return res.data;
    });
};



