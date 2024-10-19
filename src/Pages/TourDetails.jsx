import React, { useRef, useState } from 'react';
import '../styles/tour-detail.css';
import {Container ,Row,Col,Form,ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

const TourDetails = () => {

  const reviewMsgRef = useRef('');

  const [tourRating, settourRating] = useState(null);
  
  const { id } = useParams();
  const tour = tourData.find((tour) => tour.id === id); //this is the static data later we call API

  const {photo,title,desc,price,reviews,address,city,distance,maxGroupSize} = tour

  const {totalRating,avgRating} = calculateAvgRating(reviews);

  const option = {day:'numeric',month:'long',year:'numeric'};

  const submitHandler = e=>{
    e.priventDefault();
    const reviewText = reviewMsgRef.current.value;

  };


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg=''>
              <div className="tour__content">
                <img src={photo} alt="" srcset="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                  <span className='tour__rating d-flex align-items-center gap-1'>
                <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i> 
                {avgRating === 0 ? null : avgRating}
                {totalRating ===0 ? ('No Rated') :( <span>
                        ({reviews?.length})
                    </span>)}
                </span>

                <span>
                <i class="ri-map-pin-user-fill"></i> {address}
                </span>
                  </div>

                  <div className="tour__extra-details">
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i> ${price}/per person</span>
                    <span><i class="ri-map-pin-time-line"></i> {distance} k/m</span>
                    <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>


                <div className="tour__riviews mt-4">
                  <h4>Reviews ({reviews?.length}reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='rating__group d-flex align-item-center gap-3 mb-4 '>
                      <span onClick={()=>settourRating(1)}><i class="ri-star-fill"></i></span>
                      <span onClick={()=>settourRating(2)}><i class="ri-star-fill"></i></span>
                      <span onClick={()=>settourRating(3)}><i class="ri-star-fill"></i></span>
                      <span onClick={()=>settourRating(4)}><i class="ri-star-fill"></i></span>
                      <span onClick={()=>settourRating(5)}><i class="ri-star-fill"></i></span>
                    </div>

                    <div className="review__input">
                      <input type='text' ref={reviewMsgRef} placeholder='Write a review...' required />
                      <button className="btn primary__btn text-ehite" type='submit'>Submit</button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map((review) =>(
                        <div className="review__item">
                          <img src={avatar} alt="" srcset="" />

                          <div className="w-100">
                            <div className='d-flex align-item-center justify-content-between'>
                              <div>
                                <h5>Muhib</h5>
                                <p>{new Date("01-19-2024").toLocaleDateString("en-us",option)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i class="ri-star-fill"></i>
                              </span>
                            </div>
                            <h6>Amezing Tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg='4'>
                    <Booking tour = {tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails;
