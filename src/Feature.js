import React, { Component } from 'react';

function Feature(props) {
    return (
        <section>
            <div className="content">
                <header>
                    <a href="#" className={`icon ${props.icon}`}><span className="label">Icon</span></a>
                    <h3>{props.title}</h3>
                </header>
                <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
            </div>
        </section>
    );
}

export default Feature;
