import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Wrapper from './Wrapper';
import Heading from './Heading';
import Highlights from './Highlights';
import Feature from './Feature';
import CTA from './CTA';
import Testimonials from './Testimonials';
import SingleTestimonial from './SingleTestimonial';
import Footer from './Footer';

class App extends Component {
  state = {
    features: [
      {icon: 'fa-vcard-o', title: 'Feugiat consequat'},
      {icon: 'fa-files-o', title: 'Ante sem integer'},
      {icon: 'fa-floppy-o', title: 'Ipsum consequat'},
      {icon: 'fa-line-chart', title: 'Interdum gravida'},
      {icon: 'fa-paper-plane-o', title: 'Faucibus consequat'},
      {icon: 'fa-qrcode', title: 'Accumsan viverra'},
    ],
    testimonials: [
      {image: 'images/pic01.jpg', name: 'Jane Doe'},
      {image: 'images/pic02.jpg', name: 'John Doe'},
      {image: 'images/pic03.jpg', name: 'Janet Smith'},
    ]
  }

  render() {
    return (
      <React.Fragment>
          <Header />
          <Banner />
          <Wrapper>
            <Heading />
            <Highlights>
              {this.state.features.map(feature => {
                return <Feature icon={feature.icon} title={feature.title}/>
              })}
            </Highlights>
          </Wrapper>
          <CTA />
          <Wrapper>
            <Heading />
            <Testimonials>
              {this.state.testimonials.map(testimonial => {
                return <SingleTestimonial image={testimonial.image} name={testimonial.name}/>
              })}
            </Testimonials>
          </Wrapper>
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
