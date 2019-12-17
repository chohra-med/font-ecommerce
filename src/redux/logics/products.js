import axios from "axios";
import {API} from "../../config";
import {
} from "../actions/products";
import {fetchProductsAction,fetchWaitingListAction,addDisplayProductsAction} from "../actions/products";

export const fetchProducts = () => dispatch => {
    console.log('dispatchiiiing');
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

