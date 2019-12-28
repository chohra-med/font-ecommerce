import React from 'react';
import 'babel-polyfill';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as logics from '../../src/redux/logics/products';
import * as types from '../../src/redux/actionTypes';
import mockAxios from 'axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Test Fetching Products', () => {
    it('Fetch the First Elements',  () => {
        const products = [];

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                products
            })
        );
        const expectedActions = [
            {type: types.AD_PRODUCTS, payload: 'http://localhost:3000/api//ads/?r=339/'},
            {type: types.FETCH_PRODUCTS, payload: products},
            {type: types.FETCH_WAITING_LIST, payload: {}},
        ];
        let store = mockStore();
        store.dispatch(logics.fetchProducts()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
});
