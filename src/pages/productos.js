import React, { Fragment } from 'react';
import { ProductConsumer } from '../consumers/productConsumer';
import { PlanetConsumer } from '../consumers/planetConsumer';

export const Productos = () => {
    return(
        <Fragment>
            <h1 className='text-center'>Hello productos</h1>
            <ProductConsumer />
            <hr></hr>
            <h1 className='text-center'>hello Planetas</h1>
            <PlanetConsumer />
        </Fragment>
    );
}