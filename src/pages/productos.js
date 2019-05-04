import React, { Fragment } from 'react';
import { ProductConsumer } from '../consumers/productConsumer';

export const Productos = () => {
    return(
        <Fragment>
            <h1 className='text-center'>Hello productos</h1>
            <ProductConsumer />
        </Fragment>
    );
}