import React from "react";
import { Button, Header } from "../components";
import { serviceCardData } from "../data";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="hero-section">
          <div className="layer">
            <div className="container">
              <div className="hero-text mx-2">
                <h2 className="mb-0 fs-48 fw-700 text-white">
                  Crafting Financial Wellness Where <br /> Precision Meets
                  Personalization in Medical <br /> Billing Solutions.
                </h2>
                <h3 className="mb-0 fs-24 fw-500 green-text">
                  Our claim acceptance rate stands at 99.9%.
                </h3>
                <div className="hero-buttons d-flex gap-4">
                  <Button
                    text={"Call Us"}
                    width={"117px"}
                    backgroundColor={"#199ED3"}
                  />
                  <Button text={"Leave a Message"} width={"200px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container clinet-conatiner ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="clients-left mblg-0 mb-4">
                <h2 className="mb-lg-4 mb-3 fs-36 fw-800 primary-text">
                  Know Our Clients
                </h2>
                <h3 className="mb-lg-4 mb-3  fs-16 fw-400 text-gray">
                  As a trusted authority in medical billing, catering to a
                  diverse <br /> spectrum of organizations, our industry-
                  standing reputation <br /> is a testament to our reliability
                  and expertise. Our tailored <br /> services cater to the
                  unique billing needs of various entities, <br /> ensuring
                  seamless operations and financial transparency.
                </h3>
                <div className="client-button">
                  <Button
                    text={"Schedule Appointment"}
                    backgroundColor={"#199ED3"}
                    width={"250px"}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="client-image">
                <img
                  src="/assets/images/h22.jpg"
                  alt="client container image"
                  className=" img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container-fluid position-relative bg-primary-light section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
                  <img
                    src="/assets/images/icon-1.svg"
                    alt="infinia"
                    className="hover-up"
                  />
                  <h2 className="text-white mt-3 mb-4 fw-medium hover-up">
                    Scalable Business for{" "}
                    <span className="fw-bold">Startups</span>.
                  </h2>
                  <ul className="list-unstyled phase-items">
                    <li>
                      <a
                        className="phase-item d-flex align-items-center mb-3"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          ></path>
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#A38CFF"
                          ></path>
                        </svg>
                        <p className="text-white mb-0 ms-3">
                          Success Accelerators
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="phase-item d-flex align-items-center mb-3"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          ></path>
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#A38CFF"
                          ></path>
                        </svg>
                        <p className="text-white mb-0 ms-3">
                          Started politician Club
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="phase-item d-flex align-items-center mb-3"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          ></path>
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#A38CFF"
                          ></path>
                        </svg>
                        <p className="text-white mb-0 ms-3">
                          Success Accelerators
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="phase-item d-flex align-items-center mb-3"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z"
                            fill="white"
                          ></path>
                          <path
                            d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z"
                            fill="#A38CFF"
                          ></path>
                        </svg>
                        <p className="text-white mb-0 ms-3">
                          Transformational Strategy
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
                  <div className="position-relative d-inline-block z-2  hover-up">
                    <img
                      className="rounded-3 w-100 border border-3 border-white"
                      src="/assets/images/features-2/img-1.png"
                      alt="infinia"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
                      <a
                        className="d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1"
                        href="/ #"
                      >
                        <span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">
                          Get
                        </span>
                        <span className="fs-7 fw-medium text-primary mx-2">
                          Free Update
                        </span>
                      </a>
                      <h6 className="mt-3">
                        Transform Your Business <br />
                        Into Profession
                      </h6>
                      <p className="fs-7 text-700">
                        Achieve Your a of Business
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-lg-0 mb-8">
                  <div className="px-lg-8">
                    <img
                      src="/assets/images/icon-2.svg"
                      alt="infinia"
                      className="hover-up"
                    />
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-delay="100"
                      className="aos-init"
                    >
                      <h5 className="text-white mt-3 mb-3">
                        Efficiency Experts
                      </h5>
                      <p className="text-white border-bottom pb-3">
                        A business consultant provides expert advice and
                        guidance to businesses on various aspects.
                      </p>
                    </div>
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-delay="4200"
                      className="aos-init"
                    >
                      <h5 className="text-white mt-8 mb-3">
                        Strategic Solutions
                      </h5>
                      <p className="text-white">
                        Discover why hundreds of millions people use Infinia to
                        chat and call every day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute bg-rotate z-0">
              <img
                className="rotate-center"
                src="/assets/images/bg-img-favicon.png"
                alt="infinia"
              />
            </div>
            <div className="position-absolute top-0 end-n10 z-1 p-8">
              <div className="bloom"></div>
            </div>
          </div>
        </section>
        <div className="services pb-lg-5 pb-4 position-relative">
          <div className="service-bg">
            <img src="/assets/images/services-bg.png" className="w-100" />
          </div>
          <h2 className="mb-0 fs-48 fw-600 text-center fw-700">
            Services We Offer
          </h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {serviceCardData.map((card) => (
              <div key={card.id} className="col-lg-4 mb-lg-5 mb-4">
                <div className="card services-card">
                  <div className="card-img-top ">
                    <img
                      src={card.imgSrc}
                      alt="services image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body ">
                    <h3 className="mb-3 fs-24 fw-500 secondary-text">
                      {card.title}
                    </h3>
                    {card.checks.map((check, index) => (
                      <div key={index} className="checks">
                        <iconify-icon icon="hugeicons:tick-01"></iconify-icon>
                        <h4 className="mb-0 fs-16 fw-400 text-gray">{check}</h4>
                      </div>
                    ))}
                    <div className="service-button d-flex justify-content-center pt-4">
                      <Button
                        text={card.buttonText}
                        width={"200px"}
                        backgroundColor={"#199ED3"}
                        borderRadius={"8px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-5">
          <div className="choose-card card">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="clients-left">
                  <h2 className="mb-lg-4 mb-3 fs-36 fw-800 text-white">
                    Benefits of Choosing <br /> Voice care Billing Services
                  </h2>
                  <h3 className="mb-0 fs-16 fw-400 text-white">
                    At Voice care Medical Billing, we relieve financial burdens
                    and <br /> actively work to enhance your overall RCM
                    operations. It's <br /> our commitment to every medical
                    billing client nationwide. <br /> Just as you excel in your
                    field, we excel in ours. Your <br /> success is our success.
                  </h3>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="choose-image">
                  <img
                    src="/assets/images/m2.jpg"
                    alt="client container image"
                    className=" img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
          <div className="container position-relative fix">
            <div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
              <div className="col-lg-6 my-4">
                <div className="row">
                  <div className="ms-lg-4">
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/images/img-1.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 aos-init aos-animate"
                      src="/assets/images/img-2.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay="50"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                      src="/assets/images/img-3.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/images/img-4.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                      src="/assets/images/img-5.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay="100"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/images/img-6.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                      src="/assets/images/img-7.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay="100"
                    />
                  </div>
                </div>
                <div className="row d-none d-lg-flex">
                  <div className="me-lg-0">
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                      src="/assets/images/img-8.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay="50"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                      src="/assets/images/img-9.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay="100"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                      src="/assets/images/img-10.png"
                      alt="infinia"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="px-lg-5 text-lg-start text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-teal d-inline-flex rounded-pill px-4 py-2 aos-init"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <img src="/assets/images/dots.png" alt="infinia" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      Stay Updated
                    </span>
                  </div>
                  <h4
                    className="mt-3 mb-3 aos-init"
                    data-aos="fade-zoom-in"
                    data-aos-delay="100"
                  >
                    Subscribe to our Newsletter!
                  </h4>
                  <span
                    className="fs-6 fw-medium aos-init"
                    data-aos="fade-zoom-in"
                    data-aos-delay="200"
                  >
                    Join 52,000+ people on our newsletter
                  </span>
                  <div className="input-group mb-3 mt-4 position-relative">
                    <input
                      type="text"
                      className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white"
                      placeholder="Enter your mail .."
                      name="name"
                    />
                    <div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill d-flex align-items-center justify-content-center px-4">
                      <Button
                        text={"Join Now"}
                        width={"120"}
                        borderRadius={"120px"}
                        height={"40px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle z-0">
              <img src="/assets/images/bg-line.png" alt="infinia" />
            </div>
            <div className="bouncing-blobs-container rounded-4 fix">
              <div className="bouncing-blobs-glass rounded-4"></div>
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green"></div>
                <div className="bouncing-blob bouncing-blob--primary"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
