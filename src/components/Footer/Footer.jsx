import React from 'react';
import './Footer.css';
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About Us'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick__links2 = [
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg = '3'>
            <div className="logo">
              <img src={logo} alt="" srcset="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ducimus!</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i class="ri-youtube-line"></i></Link>
                </span>

                <span>
                  <Link to="#"><i class="ri-github-fill"></i></Link>
                </span>

                <span>
                  <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
                </span>

                <span>
                  <Link to="#"><i class="ri-instagram-line"></i></Link>
                </span>

              </div>
            </div>
          </Col>
          <Col lg = '3'>
            <h5 className="footer__links-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg = '3'>
          <h5 className="footer__links-title">Quick Links</h5>

          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
        ))
      }
          </ListGroup>
          </Col>
          <Col lg = '3'>
          <h5 className="footer__links-title">Contact</h5>

          <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                  <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Bhavnagar, Gujarat</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  E-mail:
                </h6>
                <p className="mb-0">gohelyash1901@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span>
                  <i class="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+91 91570-67101</p>
              </ListGroupItem>

          </ListGroup>
          </Col>

          <Col lg="12" className='text-center pt-5'>
            <p className="copyright">
              CopyRight {year}, Design and Develop By Yash Gohel. All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
