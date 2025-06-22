import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import carData from '../../assets/data/carData';
import CarItem from './CarItem';

const Suv = () => {
    const suvCars = carData.filter((car) => car.type === "SUV");

    return (
        <Container>
            <Row>
                <Col lg="12" className="text-center mb-5">
                    <h6 className="section__subtitle">Explore</h6>
                    <h2 className="section__title">SUV Cars</h2>
                </Col>
                {suvCars.map((item) => (<CarItem item={item} key={item.id} />))}
            </Row>
        </Container>
    );
}

export default Suv