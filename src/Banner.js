import React, { Component } from 'react';

function Banner(props) {
    return (
        <section id="banner">
            <div className="inner">
                <h1>Industrious</h1>
                <p>A responsive business oriented template with a video background<br />
                designed by <a href="https://templated.co/">TEMPLATED</a> and released under the Creative Commons License.</p>
            </div>
            <video autoPlay loop muted playsInline src="images/banner.mp4"></video>
        </section>
    );
}

export default Banner;
