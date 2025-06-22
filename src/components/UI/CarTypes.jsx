import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import suv from "../UI/Suv"
import "../styles/car-types.css"; // Assuming you have a CSS file for car types

const CarTypes = () => {
    const navigate = useNavigate();
    return (
        <section className="car__types-section">
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h6 className="section__subtitle">Explore</h6>
                        <h2 className="section__title">Different Car Types</h2>
                    </Col>

                    {/* Card 1: Sedan */}
                    <Col lg="4" md="6" sm="12" className="mb-4">
                        <div className="car__type-card">
                            <div className="car__type-img">
                                <img
                                    src=""
                                    alt="Sedan"
                                    className="w-100"
                                />
                            </div>
                            <div className="car__type-content">
                                <h4 className="car__type-title">Sedan</h4>
                                <p className="car__type-description">
                                    Comfortable and spacious, perfect for family trips and daily commutes.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Card 2: SUV */}
                    <Col lg="4" md="6" sm="12" className="mb-4">
                        <button
                            onClick={() => navigate("/suv")}
                            className="car__type-button"
                        >
                            <div className="car__type-card">
                                <div className="car__type-img">
                                    <img
                                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201610/tata-hexa_story_647_102416042950.jpg?VersionId=4NLtE9YFbaBPcKWbHfpc4J_bRmWPHgoh"
                                        alt="SUV"
                                        className="w-100"
                                    />
                                </div>
                                <div className="car__type-content">
                                    <h4 className="car__type-title">SUV</h4>
                                    <p className="car__type-description">
                                        Powerful and versatile, ideal for off-road adventures and large families.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </Col>

                    {/* Card 3: Sports Car */}
                    <Col lg="4" md="6" sm="12" className="mb-4">
                        <button className="car__type-button">
                            <div className="car__type-card">
                                <div className="car__type-img">
                                    <img
                                        src="https://kalingatv.com/wp-content/uploads/2024/05/Porsche-911-hybrid.jpg" // Replace with your image URL
                                        alt="Sports Car"
                                        className="w-100"
                                    />
                                </div>
                                <div className="car__type-content">
                                    <h4 className="car__type-title">Sports Car</h4>
                                    <p className="car__type-description">
                                        Sleek and fast, designed for those who love speed and performance.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CarTypes;