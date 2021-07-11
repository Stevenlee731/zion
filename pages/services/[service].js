import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Layout from "../../components/layout";
import {NextSeo} from "next-seo";
import CloudinaryImage from "../../components/cloudinary-image";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import {XIcon} from "@heroicons/react/solid";
import {
    isMobile
} from "react-device-detect";

SwiperCore.use([Navigation]);

const Service = ({gallery}) => {
    const {resources} = gallery || {};
    const router = useRouter()
    const {service} = router.query
    const formattedServiceName = service.replace(/-|\s/g," ")
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    const [initialSlide, setInitialSlide] = useState(0)

    const handleImageClick = (public_id) => {
        if (!isMobile) {
            setInitialSlide(resources.findIndex(slide => slide.public_id === public_id))
            open();
        }
    }

    return (
        <Layout>
            <NextSeo
                title="Zion Landscaping | Services"
                description="Landscaping services we offer"
            />
            <div className="max-w-7xl mx-auto">
                <div className="relative pt-8 pb-8 lg:pt-16 lg:pb-20 lg:py-16">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="capitalize max-w-lg text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                {formattedServiceName}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8 lg:pb-16 px-6 lg:px-0 max-w-7xl mx-auto">
                <ul role="list"
                    className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 ">
                    {
                        resources && resources.length > 0 ? (
                            resources.map((image, index) => {
                                const {public_id} = image;
                                return (
                                    <li key={`${public_id}-${index}`} className="relative">
                                        <div
                                            onClick={() => handleImageClick(public_id)}
                                            className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                            <CloudinaryImage publicId={public_id} className={"object-cover pointer-events-none group-hover:opacity-75"}/>
                                        </div>
                                    </li>
                                )
                            })) : null
                    }
                </ul>
            </div>
            <DialogOverlay
                style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
                isOpen={showDialog}
                onDismiss={close}
            >
                <DialogContent
                    aria-label={`${formattedServiceName} carousel`}
                    className="relative"
                    style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
                >
                    <Swiper className="mySwiper" navigation initialSlide={initialSlide}>
                        {
                            resources && resources.length > 0 ? (
                                resources.map((image, index) => {
                                    const {public_id} = image;
                                    return (
                                            <SwiperSlide key={`${public_id}-${index}`} className="relative">
                                            <div
                                                onClick={() => handleImageClick(public_id)}
                                                className="group block w-full aspect-w-10 aspect-h-7 overflow-hidden">
                                                <CloudinaryImage width={1280} publicId={public_id} className={"object-cover pointer-events-none"}/>
                                            </div>
                                            </SwiperSlide>
                                    )
                                })) : null
                        }

                    </Swiper>
                    <button className="h-6 w-6 absolute inset-y-1 right-1" onClick={close}><XIcon /></button>
                </DialogContent>
            </DialogOverlay>
        </Layout>
    )
}

export default Service


export async function getStaticProps({params}) {
    const {service} = params
    const request = await fetch(`https://res.cloudinary.com/stevelee/image/list/${service}.json`)
    const gallery = await request.json()
    return {
        props: {gallery},
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            '/services/barbeques',
            '/services/hardscapes',
            '/services/softscapes',
            '/services/custom-installations'
        ],
        fallback: false,
    }
}