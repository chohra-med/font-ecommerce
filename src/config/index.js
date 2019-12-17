export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const BASE_NAME = IS_DEV ? '' : '/Creattella E-Commerce';

 export const URL = 'http://localhost:3000';

export const API = (model = undefined, sort = undefined) => {
    if (model && sort) {
        return `${URL}/api/${model}?_sort=${sort}/`;
    }
    if (model) {
        return `${URL}/api/${model}/`;
    }
    return `${URL}/api/`;
};
