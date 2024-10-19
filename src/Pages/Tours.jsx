import React, { useEffect, useState } from 'react';
import CommonSection from '../shred/CommonSection';
import '../styles/tour.css';
import TourCard from '../shred/TourCard';
import SearchBar from '../shred/SearchBar';
import NewsLetter from '../shred/NewsLetter';
import tourData from '../assets/data/tours';
import { Container, Row , Col} from 'reactstrap';

const Tours = () => {

  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);

  useEffect(() => {
    const page = Math.ceil(5/4)
    setpageCount(page);
  },[page]);

  return (
    <>
      <CommonSection title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour=>
              <Col 
              lg='3'
              className='mb-4' 
              key={tour.id}
              >
                <TourCard tour={tour}/>
              </Col>)
            }

            <Col lg='12'>
              <div className="pagination d-flex align-itemw-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys().map(number=>(
                  <span key={number} onClick = {()=>setpage(number)}
                  className={page===number ? 'active__page':' '}
                  >
                    {number + 1}
                  </span>
                ))]}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default Tours;
