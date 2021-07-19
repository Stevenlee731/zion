import React from "react";

import Layout from "../components/layout";
import Banner from "../components/banner";
import {ParallaxBanner} from "react-scroll-parallax";
import {NextSeo} from "next-seo";
import Testimonials from "../components/testimonials";
import {isMobile} from "react-device-detect";

function AboutPage() {
    return (
        <Layout>
            <NextSeo
                title="Zion Landscaping | About Us"
                description="Your trusted Orange County landscaping company"
            />
            <div className="max-w-7xl mx-auto">
                <div className="relative px-4 sm:px-6 lg:px-0 pt-16 pb-20 lg:pt-24 lg:pb-16">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="max-w-lg text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                The OC Landscaping company you can trust
                            </h2>
                            <p className="mt-4 text-lg text-gray-500 max-w-4xl">
                                Zion Landscaping Inc. prides itself in superior workmanship, excellent customer service, and a keen attention to detail. Our mission is to provide industry-leading customer satisfaction and exceptional quality service. Our company is based on the following principle: we cater to our clientele&apos;s visions by offering a wide range of services. We believe frequent communication with our clients is one of the keys to a successful project. We maintain a highly professional staff that understands and responds to customers&apos; needs in a friendly, personal manner. Ultimately, we will constantly strive to have your project completed on time and with minimal inconvenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Banner height="300px">
                <ParallaxBanner
                    disabled={isMobile}
                    className="your-class"
                    layers={[
                        {
                            image: 'https://res.cloudinary.com/stevelee/image/upload/v1625527419/softscapes/20210428_165451.jpg',
                            amount: 0.8,
                        },
                    ]}
                    style={{
                        height: '300px',
                    }}
                >
                </ParallaxBanner>
            </Banner>
            <Testimonials/>
        </Layout>
    );
}

export default AboutPage;
