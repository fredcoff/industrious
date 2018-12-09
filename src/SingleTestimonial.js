import React, { Component } from 'react';

function Testimonial(props) {
    return (
        <section>
            <div className="content">
                <blockquote>
                    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                </blockquote>
                <div className="author">
                    <div className="image">
                        <img src={props.image} alt="" />
                    </div>
                    <p className="credit">- <strong>{props.name}</strong> <span>CEO - ABC Inc.</span></p>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
