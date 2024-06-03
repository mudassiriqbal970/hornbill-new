"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  let iconStyles = { color: "var(--primary-color)", fontSize: "16px" };
  let iconStyles2 = { color: "#fff", fontSize: "25px" };
  const router = useRouter();
  const pathName = usePathname();
  // const path = window.location.pathname;

  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <header>
      <div className="top-header py-3">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-3 col-md-10 col-9">
              <Link className="navbar-brand" href="/">
                <Image
                  src="/images/logo.png"
                  alt="Your Logo"
                  width={200}
                  height={60}
                />
              </Link>
            </div>
            <div className="col-md-9 d-lg-block d-none ">
              <ul className="list-unstyled d-flex gap-5 align-items-center justify-content-end">
                <li>
                  <Link href="#">
                    <div className="box-icon-text d-flex  justify-content-center align-items-center gap-3">
                      <div className="box-icon">
                        <MdPhoneInTalk style={iconStyles} />
                      </div>
                      <div className="box-text ">
                        <span className="text-dark">Call Us</span>
                        <h6 className="text-primary">0512308328-9</h6>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="box-icon-text d-flex  justify-content-center align-items-center gap-3">
                      <div className="box-icon">
                        <FaMapMarkerAlt style={iconStyles} />
                      </div>
                      <div className="box-text ">
                        <span className="text-dark">Visit Us:</span>
                        <h6 className="text-primary">
                          House No 02, Main Service <br></br> Road, G-16/4, Islamabad
                        </h6>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="btn-secondary text-dark">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-2 col-3 px-md-0">
              <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                  <div className="bg-primary py-md-3 px-md-4 position-absolute w-lg-100 bottom-menu">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                      aria-label="Toggle navigation"
                    >
                      <FiMenu style={iconStyles2} />
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex={-1}
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasNavbarLabel"
                        >
                          <Image
                            src="/images/logo.png"
                            alt="Your Logo"
                            width={200}
                            height={60}
                          />
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center gap-lg-5 gap-3 flex-grow-1 pe-3">
                          {menu.map((item) => (
                            <li key={item.id} className="nav-item">
                              <Link
                                className={
                                  item.path === pathName
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                href={item.path}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
