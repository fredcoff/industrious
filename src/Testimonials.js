import React, { Component } from 'react';

function Testimonials(props) {
    return (
        <div class="testimonials">
            {props.children}
        </div>
    );
}

export default Testimonials;
