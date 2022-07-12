import React, {MouseEventHandler, useEffect, useState} from 'react';

import {useAppSelector} from '../../app/hooks';
import {selectProducts} from './productsSlice';
import ProductCard from "./components/ProductCard";

export function ProductOverview() {
    const products = useAppSelector(selectProducts)

    return (
        <div className={'grid grid-cols-2 md:grid-cols-3 gap-[2rem]'}>
            {
                products && products.map(product => (
                    <ProductCard title={product.name} subtitle={product.reason} id={product.id} key={product.id}/>
                ))
            }
        </div>
    );
}
