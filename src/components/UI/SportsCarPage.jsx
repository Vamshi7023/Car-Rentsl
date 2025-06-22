import React from 'react'
import carData from '../../assets/data/carData'
import CarItem from './CarItem'
import {Container,Row,Col} from 'reactstrap'
const SportsCarPage = () => {
  const sports = carData.filter((car) => car.type === "SPORTS")
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h6 className="section__subtitle">Explore</h6>
          <h2 className="section__title">SUV Cars</h2>
        </Col>
        {sports.map((item)=>(<CarItem item = {item} key = {item.id} />))}
      </Row>
    </Container>
  )
}

export default SportsCarPage