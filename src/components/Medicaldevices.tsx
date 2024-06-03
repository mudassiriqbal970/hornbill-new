import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Medicaldevices = () => {
  const medicalDevices = [
    {
      id: 1,
      title: "ICU Equipment",
      description:
        "From advanced ventilators to patient monitors, we supply critical care equipment that ensures patient safety and supports healthcare professionals in delivering optimal care.",
    },
    {
      id: 2,
      title: "Imaging Equipment",
      description:
        "Our range includes state-of-the-art imaging solutions such as MRI machines, CT scanners, ultrasound devices, and X-ray systems, which provide accurate diagnostics and enhance treatment outcomes.",
    },
    {
      id: 3,
      title: "Hospital Furniture",
      description:
        "We offer a variety of hospital furniture designed for comfort, functionality, and durability, including hospital beds, bedside cabinets, and overbed tables, all crafted to support patient recovery and improve workflow efficiency for healthcare staff.",
    },
    {
      id: 4,
      title: "Patient Care Products",
      description:
        "From infusion pumps to patient transport systems, our patient care products are designed to enhance the quality of care and ensure patient comfort and safety.",
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
              Who We Are
              </h6>
            </div>
            <h2 className="text-primary my-2">
              Who We <span className="text-secondary">Are</span>
            </h2>
            <p>
              HornBill is a comprehensive supplier of a wide range of medical
              equipment, catering to various needs within the healthcare
              industry. Our portfolio includes:
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              {medicalDevices.map((device) => (
                <div key={device.id} className="col-md-3 px-md-2 mb-md-0 mb-4 ">
                  <div className="text-center p-4 medical-device-box h-100">
                    <div className="icon-top mt-2">
                      <FaHeartbeat className="heart-icon" style={iconStyles} />
                    </div>
                    <h5 className="medical-device-title mt-3 mb-2">
                      {device.title}
                    </h5>
                    <p className="medical-device-description pb-2">
                      {device.description}
                    </p>
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

export default Medicaldevices;
