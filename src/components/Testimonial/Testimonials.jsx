import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
// import ava02 from '../../assets/images/ava-2.jpg';
// import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const settings={
        dots: true,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow:3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
   <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore nobis mollitia. Id nobis aliquid in asperiores eaque quasi optio.</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt='' className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">Johne Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
   </Slider>
  )
}

export default Testimonials
