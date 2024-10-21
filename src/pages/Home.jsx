import React from "react";
import { Button, Card, Input } from "antd";
import { ServiceCard } from "../components";
import { serviceCardData } from "../data";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Home = () => {
  return (
    <>
      <div className="container mx-auto">

        <section className="relative bg-teal-600 py-16 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Reliable Services, Just a Click Away
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              We provide top-notch services like chat support, cost estimation, and web
              applications tailored to meet your needs. Your business growth starts here.
            </p>
            <Button
              type="primary"
              className="bg-white text-teal-600 border-none mt-8 hover:text-teal-300 shadow-lg"
              size="large"
              shape="round"

            >
              Get Started <ArrowRightOutlined />
            </Button>
          </div>        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center text-teal-600 mb-12">
              Explore Our Services
            </h3>
            <section className="bg-gray-100 py-16">
              <div className="container mx-auto overflow-x-auto flex space-x-8 px-6">
                <ServiceCard services={serviceCardData} />
              </div>
            </section>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16 text-white">
          <div className="container mx-auto text-center">
            <h4 className="text-4xl font-semibold mb-6">Subscribe to our Newsletter</h4>
            <p className="text-lg mb-6">
              Join 52,000+ people on our newsletter to get the latest updates.
            </p>
            <div className="flex justify-center items-center">
              <Input
                className="rounded-l-full px-4 py-2 text-black"
                placeholder="Enter your email"
                style={{ maxWidth: "300px" }}
              />
              <Button
                type="primary"
                className="bg-white text-teal-500 rounded-r-full px-8 py-2"
                size="large"
              >
                Join Now
              </Button>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Home;
