import React from 'react';
import User from '../../Assets/User.jpg';
import '../Card/Card.css'

export const Card = () => {
    return ( 
<div className="card">
    <img src={User} alt-text="user" className="user"/>
    <p className="feedback">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    </p>
    <h4 className="title">
    Tanvi Agarwal
    </h4>
    <p className="designation">
    Product Engineer - React JS, Author
    </p>
</div>        )
}