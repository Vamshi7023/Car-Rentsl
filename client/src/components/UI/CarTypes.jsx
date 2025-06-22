import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/car-types.css";

const CarTypes = () => {
    const navigate = useNavigate();
    
    const carTypes = [
        {
            id: 1,
            title: "Sedan",
            description: "Comfortable and spacious, perfect for family trips and daily commutes.",
            imgUrl: "https://www.olx.in/blog/wp-content/uploads/2024/02/Amaze.jpg",
            onClick: () => navigate("/sedan")
        },
        {
            id: 2,
            title: "SUV",
            description: "Powerful and versatile, ideal for off-road adventures and large families.",
            imgUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201610/tata-hexa_story_647_102416042950.jpg",
            onClick: () => navigate("/suv")
        },
        {
            id: 3,
            title: "Sports Car",
            description: "Sleek and fast, designed for those who love speed and performance.",
            imgUrl: "https://kalingatv.com/wp-content/uploads/2024/05/Porsche-911-hybrid.jpg",
            onClick: () => navigate("/sports-car")
        }
    ];

    return (
        <section className="car__types-section">
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h6 className="section__subtitle">Explore</h6>
                        <h2 className="section__title">Different Car Types</h2>
                    </Col>

                    {carTypes.map((car) => (
                        <Col lg="4" md="6" sm="12" className="mb-4" key={car.id}>
                            {car.onClick ? (
                                <button
                                    onClick={car.onClick}
                                    className="car__type-button"
                                >
                                    <CarCard car={car} />
                                </button>
                            ) : (
                                <CarCard car={car} />
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

const CarCard = ({ car }) => (
    <div className="car__type-card">
        <div className="car__type-img">
            <img src={car.imgUrl} alt={car.title} className="w-100" />
        </div>
        <div className="car__type-content">
            <h4 className="car__type-title">{car.title}</h4>
            <p className="car__type-description">{car.description}</p>
        </div>
    </div>
);

export default CarTypes;