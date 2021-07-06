import Layout from "../../components/layout";
import Link from "next/link"
import Image from 'next/image'
import {NextSeo} from "next-seo";
import React from "react";
import testimonialImage from '../../images/home-banner.jpg'

function ServicesPage() {
    const services = [
        {
            title: 'Hardscapes',
            href: 'hardscapes',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
            testimonialImage,
        },
        {
            title: 'Softscapes',
            href: 'softscapes',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl: testimonialImage,
        },
        {
            title: 'Barbeques',
            href: 'barbeques',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl: testimonialImage,
        },
        {
            title: 'Custom Installations',
            href: 'custom-installations',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl: testimonialImage,
        },

    ]
    return (
        <Layout>
            <NextSeo
                title="Zion Landscaping | Services"
                description="Landscaping services we offer"
            />
            <div className="max-w-7xl mx-auto">
                <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Services We
                                offer</h2>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-x-7 gap-y-10 lg:grid-cols-3 lg:max-w-none">
                            {services.map((service) => (
                                <Link
                                    key={service.title}
                                    href={`/services/${service.href}`}
                                >
                                    <div className="cursor-pointer flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div className="flex-shrink-0">
                                            <Image layout={"responsive"} className="h-64 w-full object-cover"
                                                   src={service.imageUrl} alt={service.title}/>
                                        </div>
                                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex-1">

                                                <p className="text-xl font-semibold text-center text-gray-900">{service.title}</p>
                                                <p className="mt-3 text-base text-center text-gray-500">{service.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServicesPage;
