import React from 'react';
import {Header} from '../../Views/Header/Header'
import {Testimonials} from '../../Components/Testimonials/Testimonials';

export const MainPage = () => {
    return ( 
        <React.Fragment>
            <Header/>
            <Testimonials/>
        </React.Fragment>
    )
}