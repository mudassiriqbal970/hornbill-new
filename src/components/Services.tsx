import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const backgroundImage = "/images/service.jpg";

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const servicesData = [
    {
      id: 1,
      title: "Me tioned",
    },
    {
      id: 2,
      title: "Medical imaging",
    },
    {
      id: 3,
      title: "ICU equipments",
    },

    {
      id: 4,
      title: "Hospital furniture",
    },
    {
      id: 5,
      title: "Patient care products",
    },
    {
      id: 6,
      title: "Laboratory",
    },
  ];
  let iconStyles = {
    color: "var(--primary-color)",
    backgroundColor: "#fff",
  };
  return (
    <section>
      <div className="container">
        <div className="row align-items-center  bg-primary">
          <div className="col-lg-6" style={bannerStyle}>
            <div className="spacer-height"></div>
          </div>
          <div className="col-lg-6">
          <div className="p-md-5 p-2 pt-md-5 pt-5">
            <h6 className="border-heading left-border text-white position-relative px-3 fw-600 mb-2">
              Services
            </h6>
            <h2 className="text-white">
              Our Experts Will <span className="text-secondary">Take Care </span>
              of You
            </h2>
            <div className="row mt-4 ">
            {servicesData.map((service) => (
                <div key={service.id} className="col-md-6 icon-text-box mb-4">
                  <div className="d-flex align-items-baseline gap-3">
                  <div className="icon-top mt-2">
                    <FaHeartbeat className="heart-icon" style={iconStyles} />
                  </div>
                    <h5 className="text-white">{service.title}</h5>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
