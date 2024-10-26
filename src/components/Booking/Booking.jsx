import React, {useState} from 'react'
import './Booking.css';
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap';
import { useNavigate } from 'react-router';

const Booking = ({tour,avgRating}) => {

    const {price,reviews} = tour;
    const navigate = useNavigate();

    const handleChange = e =>{
      setcredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    // send data to the server

    const handleClick = e =>{
      e.preventDefault();
      navigate("/thank-you");
      
      // send data to the server
    }
    const [credentials, setcredentials] = useState({
      userId: '01',
      userEmail: 'Example@gmail.com',
      fullName: 'yash',
      phone : '123',
      guestSize : 1,
      bookAt : '',
    });

    
    const serviecFee = 10;
    const totalAmount = Number(price)*Number(credentials.guestSize) + Number(serviecFee);

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span> /per person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
                    <i class="ri-star-fill"></i> 
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
            </span>
        </div>
{/* booking from */}
        <div className="booking__form ">
          <h5>Information</h5>
          <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
              <input type="text" name="" id="fullName" placeholder='Full Name' required onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <input type="number" name="" id="phone" placeholder='phone' required onChange={handleChange} />
            </FormGroup>

            <FormGroup className='d-flex align-items-center gap-3'>
              <input type="date" name="" id="bookAt" placeholder='' required onChange={handleChange} />
              <input type="number" name="" id="guestSize" placeholder='Guest' required onChange={handleChange} />
            </FormGroup>
            
          </Form>
        </div>

        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className ='border-0 px-0'>
              <h5 className='d-flex align-item-center gap-1'>
                ${price} <i class="ri-close-line"></i> 1 person 
              </h5>
              <span>${price}</span>
            </ListGroupItem>

            <ListGroupItem className ='border-0 px-0'>
              <h5>Service Charge</h5>
              <span>${serviecFee}</span>
            </ListGroupItem>

            <ListGroupItem className ='border-0 px-0 total'>
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>

          </ListGroup>

          <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>

    </div>
  )
}

export default Booking
