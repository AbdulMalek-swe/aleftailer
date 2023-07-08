
import React from 'react';

import { addCartActions } from 'rtk/feature/addCart';
import store from 'rtk/store/store';

export const cartHook = () => {
    const addToCartHandle = (item) => {
       
        store.dispatch(addCartActions.addToCart(item))
    }
    const removeFromCartHandle = (id) => {
        store.dispatch(addCartActions.removeFromCart(id))
    }
    return {
        addToCartHandle,
        removeFromCartHandle
    }
};

export default cartHook;
