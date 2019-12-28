import React from 'react';
import 'babel-polyfill';

import ReactDom from 'react-dom';
import {
    render
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer';

import products from '../../src/redux/reducers/products';
import * as logics from '../../src/redux/logics/products';
import * as types from '../../src/redux/actionTypes';
import mockAxios from 'axios'
import {FETCH_PRODUCTS} from "../../src/redux/actionTypes";

describe('Products reducer', () => {
    it('should return the initial state', () => {
        expect(products(undefined, {})).toEqual(
            {
                displayedProducts: [],
                waitingListProducts: [],
                dispalyedAds: [],
                page: 3,
                sort: null,
            }
        );
    });
    it('should handle FETCH_PRODUCTS', () => {
        expect(
            products(undefined, {
                type: types.FETCH_PRODUCTS,
                payload: 'firstProduct'
            })
        ).toEqual(
            {
                waitingListProducts: [],
                dispalyedAds: [],
                page: 3,
                sort: null,
                displayedProducts: 'firstProduct',
            }
        );

    });
});
