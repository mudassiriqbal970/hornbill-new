import React from "react";

const Contact = () => {
  let contant_bg = { backgroundColor: "#f4f5f9" };

  return (
    <section className="section-padding " style={contant_bg}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pe-md-5  mb-4">
            <h2 className="text-primary mb-4">
              Fix an <span className="text-secondary">Appointment </span>
            </h2>
            <form>
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-12 mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="text-end">
              <button type="submit" className=" btn-secondary border-0">
                Send
              </button>
            </div>
          </div>
          <div className="col-md-6 mb-4"> </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
