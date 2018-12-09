import React, { Component } from 'react';

function Wrapper(props) {
    return (
        <section class="wrapper">
            <div class="inner">
                {props.children}
            </div>
        </section>
    );
}

export default Wrapper;
