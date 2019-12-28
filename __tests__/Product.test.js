import React from 'react';
import ReactDom from 'react-dom';
import Product from '../src/views/home/Product/Product';

import {
    render
} from '@testing-library/react';
import renderer from "react-test-renderer";


test("render without problem", () => {
    const div = document.createElement("div");
    let item = {
        face: "o___o",
        price: 23,
        date: new Date().getTime()
    };
    console.log('item', item);
    ReactDom.render(
        <Product item={item}/>
        ,
        div);
});

/***
 * const listView = renderer.create(<ListView/>).getInstance();
 let data = listView.state.ourData;
 listView.updateList();
 let dataAfter = listView.state.ourData;
 console.log(dataAfter,data);
 let equal = JSON.stringify(dataAfter) === JSON.stringify(data);
 expect(equal).toBeFalsy();
 */
