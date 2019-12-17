export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const BASE_NAME = IS_DEV ? '' : '/Creattella E-Commerce';

 export const URL = 'http://localhost:3000';

export const API = (model = undefined, id = undefined) => {
    if (model && id) {
        return `${URL}/api/${model}/${id}/`;
    }
    if (model) {
        return `${URL}/api/${model}/`;
    }
    return `${URL}/api/`;
};
