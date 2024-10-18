import React from 'react';
import '../styles/home.css';
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experinceImg from '../assets/images/experience.png';

import worldImg from '../assets/images/world.png';
import Subtitle from '../shred/Subtitle';
import SearchBar from '../shred/SearchBar';

import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
// import ImagesGallery from '../components/Image-gallery/ImagesGallery';
import NewsLetter from '../shred/NewsLetter';
// import Testimonials from '../components/Testimonial/Testimonials';
const Home = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={'know Before You GO'}/>
                  <img src={worldImg} alt=''/>
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi adipisci doloribus sed in totam, recusandae eaque placeat nihil dolorem!</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=''/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt='' controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=''/>
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
             <h5 className="service__subtitle">What we Serve </h5>
             <h2 className='services__title'> We  Offer our best services </h2>
            </Col>
            
            <ServiceList/>

          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle Subtitle={'Explore'}></Subtitle>
              <h2 className='featured__tour-title'>Our featured tours </h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experince__Content">
                <Subtitle Subtitle={'Experince'}/>
                <h2>With our all experince <br />We will Serve You 
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                 Dolorem officiis vero asperiores, fuga mollitia quod!</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter__box">
                  <span>24k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experince</h6>
                </div>
                
              </div>
            </Col>
            <Col lg='6'>
              <div className="experince__img">
                <img src={experinceImg} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lr='12'>
             <Subtitle Subtitle={'Galleru'}/>
             <h2 className="gallery__title">
              Visit Our Customer Tour Gallary
             </h2>
            </Col>
            <Col lg='12'>
              <ImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">
                What Our Fans Say About Us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section> */}

      <NewsLetter></NewsLetter>

    </div>
  )
}

export default Home;
