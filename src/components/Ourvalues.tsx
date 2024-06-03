import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";

const Ourvalues = () => {
  const Ourvalues = [
    {
      id: 1,
      image: "/images/values1.jpg",
      title: "Compassion",
      description:
        "We put people first. Our solutions are designed to meet the needs of both healthcare providers and patients, ensuring comfort, safety, and the best possible outcomes.",
    },
    {
      id: 2,
      image: "/images/values2.jpg",
      title: "Innovation",
      description:
        "We are at the forefront of medical technology. By bringing the latest advancements in medical equipment to Pakistan, we help healthcare providers stay ahead in their field and deliver cutting-edge care.",
    },
    {
      id: 3,
      image: "/images/values3.jpg",
      title: "Trust",
      description:
        "Trust is the cornerstone of our business. We build lasting relationships with our clients through transparency, reliability, and exceptional service. Our commitment to quality ensures that you can depend on us for all your medical equipment needs.",
    },
  ];
  let iconStyles = {
    color: "#fff",
    backgroundColor: "var(--primary-color)",
  };
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-9 text-center mx-auto mb-4">
            <div className="d-flex justify-content-center">
              <h6 className="border-heading  left-border right-border text-primary position-relative px-3 fw-600 mb-2">
                Our Values: Compassion, Innovation, Trust
              </h6>
            </div>
            <h2 className="text-primary my-2">
              Our <span className="text-secondary">Commitment</span>
            </h2>
            <p>
              At HornBill, we are committed to delivering excellence in every
              aspect of our operations. We understand the critical role that
              reliable medical equipment plays in healthcare delivery.
              Therefore, we only partner with leading manufacturers known for
              their innovation, quality, and reliability.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              {Ourvalues.map((device) => (
                <div key={device.id} className="col-md-4 px-md-2 mb-md-0 mb-4 ">
                  <div className="text-center medical-device-box h-100">
                    <Image
                      src={device.image}
                      alt={device.title}
                      width="0"
                      height="250"
                      sizes="100vw"
                      className="w-100 object-fit-cover "
                    />

                    <div className="px-4 py-2">
                      <h4 className="medical-device-title mt-3 mb-2 text-primary">
                        {device.title}
                      </h4>
                      <p className="medical-device-description pb-2">
                        {device.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
