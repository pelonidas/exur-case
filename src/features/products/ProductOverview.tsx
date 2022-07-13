import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {useAppSelector} from '../../app/hooks';
import {selectLoading, selectProducts} from './productsSlice';
import ProductCard from "./components/ProductCard";

export function ProductOverview() {
    const products = useAppSelector(selectProducts)
    const loading = useAppSelector(selectLoading)
    return (
        <>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[2rem]'}>
                {
                    products && products.map(product => (
                        <ProductCard title={product.name} subtitle={product.reason} id={product.id} key={product.id}/>
                    ))
                }

            </div>
            {loading && (
                <div className={'w-full flex justify-center'}>
                    <div className={'flex w-min'}>
                        <CircularProgress/>
                    </div>
                </div>
            )}
        </>


    );
}
