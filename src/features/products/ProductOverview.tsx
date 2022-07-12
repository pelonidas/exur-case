import React, {MouseEventHandler, useEffect, useState} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    fetchProductsAsync
} from './productsSlice';

export function ProductOverview() {
    const data = useAppSelector(state => state.products)
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(fetchProductsAsync('cake'))
    }

    return (
        <div>

        </div>
    );
}
