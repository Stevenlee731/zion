import QuotationSVG from './svg/quotation'
import Image from "next/image";
import testimonialImage from '../images/home-banner.jpg'

function Testimonials() {
    return (
        <section className="bg-gray-50 py-8 lg:py-16">
            <div className=" pt-0 lg:py-16">
                <div className="lg:pb-0 lg:z-10 lg:relative">
                    <div className="flex flex-col lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative lg:-my-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                <div
                                    className="aspect-w-10 aspect-h-6 shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <Image layout={"fill"} className="rounded-xl object-cover lg:h-full lg:w-full" src={"https://res.cloudinary.com/stevelee/image/upload/w_800/v1625527704/hardscapes/20201123_163909.jpg"}/>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:m-0 lg:col-span-2 lg:pl-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                <blockquote>
                                    <div>
                                        <QuotationSVG/>
                                        <p className="mt-6 text-lg lg:text-2xl font-medium text-black">
                                            Paul was honest with his estimate and managed our expectations as we had never built out a backyard before
                                        </p>
                                    </div>
                                    <footer className="mt-6">
                                        <p className="text-base font-medium text-green-400">Rosi M. - Irvine</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 lg:py-16">
                <div className=" lg:pb-0 lg:z-10 lg:relative">
                    <div className="flex flex-col lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="order-2 lg:order-1 lg:m-0 lg:col-span-2 lg:pl-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                <blockquote>
                                    <div>
                                        <QuotationSVG/>
                                        <p className="mt-6 text-lg lg:text-2xl font-medium text-black">
                                            Zion landscaping is excellent. They installed our entire yard for a new home. We are very pleased. Good attention to detail and craftsmanship. They worked steadily and answered our questions throughout. Paul is responsive and insightful.
                                        </p>
                                    </div>
                                    <footer className="mt-6">
                                        <p className="text-base font-medium text-green-400">Jm M. - Lake Forrest</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative lg:-my-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                <div
                                    className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <Image layout={"fill"} className="rounded-xl object-cover lg:h-full lg:w-full" src={"https://res.cloudinary.com/stevelee/image/upload/w_800/v1625527417/softscapes/20200514_115051.jpg"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8 lg:py-16">
                <div className="lg:pb-0 lg:z-10 lg:relative">
                    <div className="flex flex-col lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative lg:-my-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                <div
                                    className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <Image layout={"fill"} className="rounded-xl object-cover lg:h-full lg:w-full" src={"https://res.cloudinary.com/stevelee/image/upload/w_800/v1625530544/custom-installations/20200522_145122.jpg"}/>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:m-0 lg:col-span-2 lg:pl-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                <blockquote>
                                    <div>
                                        <QuotationSVG/>
                                        <p className="mt-6 text-lg lg:text-2xl font-medium text-black">
                                            Zion not only provided the best price, but also were excellent to work with. We plan on having them tackle other house projects in the future and have already gotten their bid on other renovations to our home.
                                        </p>
                                    </div>
                                    <footer className="mt-6">
                                        <p className="text-base font-medium text-green-400">Amie L. - Mission Viejo</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
