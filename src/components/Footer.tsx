import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXRay } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  let iconStyles = { color: "#fff", fontSize: "16px" };
  return (
    <footer className="bg-primary">
      <div className="container pt-5">
        <div className="row pt-5 pb-4 ">
          <div className="col-lg-3 col-md-6 mb-4">
            <Link className="navbar-brand" href="#">
              <Image
                src="/images/logo.png"
                alt="Your Logo"
                width={200}
                height={60}
              />
            </Link>
            <p className="text-white my-3">
              At HornBill, we are dedicated to enhancing healthcare through the
              provision of top-quality medical equipment.{" "}
            </p>
            <h5 className="text-white mb-3">Follow Us:</h5>
            <ul className=" footer-contact list-unstyled d-flex gap-2">
              <li>
                <Link href="#">
                  <div className="box-icon border-white">
                    <FaFacebook style={iconStyles} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="box-icon border-white">
                    <FaInstagram style={iconStyles} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="box-icon border-white">
                    <FaGoogle style={iconStyles} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="box-icon border-white">
                    <FaLinkedin style={iconStyles} />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 mb-4">
            <div className="footer-title ">
              <h5 className="text-white">Quick Links</h5>
              <div className="title-divider my-3"></div>
            </div>
            <ul className="list-unstyled footer-list gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 mb-4">
            <div className="footer-title ">
              <h5 className="text-white">Service</h5>
              <div className="title-divider my-3"></div>
            </div>
            <ul className="list-unstyled footer-list gap-4">
              <li>
                <Link href="#">Urgent Care</Link>
              </li>
              <li>
                <Link href="#">Dot Testing</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-title ">
              <h5 className="text-white">Hours of Operation</h5>
              <div className="title-divider my-3"></div>
            </div>
            <ul className="list-unstyled footer-list gap-4">
              <li>
                <span className="text-white">Mon-Fri 8:00am - 7:30pm</span>
              </li>
              <li>
                <span className="text-white">Sat-Sun 99:00am - 5:00pm</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-title ">
              <h5 className="text-white">Get In Touch</h5>
              <div className="title-divider my-3"></div>
            </div>
            <ul className="list-unstyled footer-contact">
              <li className="mb-4">
                <Link href="tel:051-2308328">
                  <div className="box-icon-text d-flex  gap-3 align-items-center">
                    <div className="box-icon border-white">
                      <FaPhoneAlt style={iconStyles} />
                    </div>
                    <div className="box-text text-white ">
                      <h6 className="text-white mb-0">Call Us</h6>
                      <span className="text-white ">051-2308328</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="tel:0512308328-9">
                  <div className="box-icon-text d-flex  gap-3 align-items-center">
                    <div className="box-icon border-white">
                      <FaPhoneAlt style={iconStyles} />
                    </div>
                    <div className="box-text text-white ">
                      <h6 className="text-white mb-0">Call Us</h6>
                      <span className="text-white ">0512308328-9</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <span>
                  <div className="box-icon-text d-flex  gap-3 align-items-center">
                    <div className="box-icon border-white">
                      <FaMapMarkerAlt style={iconStyles} />
                    </div>
                    <div className="box-text text-white ">
                      <h6 className="text-white mb-0">Visit Us</h6>
                      <span className="text-white ">
                        House No 02, Main Service Road,
                        <br /> G-16/4, Islamabad
                      </span>
                    </div>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer py-3">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <ul className="d-flex flex-column flex-md-row gap-3 gap-md-4 list-unstyled text-center">
                <li>
                  <span className="text-white">
                    © All Rights Reserved 2024 Develop by
                    <Link
                      href="https://devsrank.com/"
                      className="text-white ps-1"
                      target="_blank"
                    >
                      DevsRank
                    </Link>
                  </span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-decoration-underline "
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-decoration-underline"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
