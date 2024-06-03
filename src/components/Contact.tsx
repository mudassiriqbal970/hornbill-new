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
          <div className="col-md-6 mb-4">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3322.359273151465!2d72.9194221756982!3d33.62192537332201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM3JzE4LjkiTiA3MsKwNTUnMTkuMiJF!5e0!3m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              className="border-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
