import React from "react";
import Layout from "../components/layout";
import {NextSeo} from "next-seo";
import { useState } from 'react'

function ContactPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            firstName,
            lastName,
            phoneNumber,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhoneNumber('')
                setMessage('')
            }
        })
    }

  return (
    <Layout>
        <NextSeo
            title="Zion Landscaping | Contact"
            description="Your trusted Orange County landscaping company"
        />
          <div className="bg-white overflow-hidden sm:px-6 lg:px-8 lg:py-24">
              <div className="relative max-w-xl mx-auto p-6 lg:p-0">
                  <svg
                      className="absolute left-full transform translate-x-1/2"
                      width={404}
                      height={404}
                      fill="none"
                      viewBox="0 0 404 404"
                      aria-hidden="true"
                  >
                      <defs>
                          <pattern
                              id="85737c0e-0916-41d7-917f-596dc7edfa27"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                          >
                              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                          </pattern>
                      </defs>
                      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                  </svg>
                  <svg
                      className="absolute right-full bottom-0 transform -translate-x-1/2"
                      width={404}
                      height={404}
                      fill="none"
                      viewBox="0 0 404 404"
                      aria-hidden="true"
                  >
                      <defs>
                          <pattern
                              id="85737c0e-0916-41d7-917f-596dc7edfa27"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                          >
                              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                          </pattern>
                      </defs>
                      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                  </svg>
                  <div className="text-center">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
                      <p className="mt-4 text-lg leading-6 text-gray-500">
                          We'd love to discuss your home's next dream project!
                      </p>
                  </div>
                  <div className="mt-12">
                      <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                          <div>
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                  First name
                              </label>
                              <div className="mt-1">
                                  <input
                                      onChange={(e)=>{setFirstName(e.target.value)}}
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                                  />
                              </div>
                          </div>
                          <div>
                              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                  Last name
                              </label>
                              <div className="mt-1">
                                  <input
                                      onChange={(e)=>{setLastName(e.target.value)}}
                                      type="text"
                                      name="last-name"
                                      id="last-name"
                                      autoComplete="family-name"
                                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-2">
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                  Email
                              </label>
                              <div className="mt-1">
                                  <input
                                      onChange={(e)=>{setEmail(e.target.value)}}
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                                  />
                              </div>
                          </div>
                          <div className="sm:col-span-2">
                              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                  Phone Number
                              </label>
                              <div className="mt-1 relative rounded-md shadow-sm">

                                  <input
                                      onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                      type="text"
                                      name="phone-number"
                                      id="phone-number"
                                      autoComplete="tel"
                                      className="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                                      placeholder="+1 (555) 987-6543"
                                  />
                              </div>
                          </div>
                          <div className="sm:col-span-2">
                              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                  Message
                              </label>
                              <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border border-gray-300 rounded-md"
                    defaultValue={''}
                    onChange={(e)=>{setMessage(e.target.value)}}
                />
                              </div>
                          </div>

                          <div className="sm:col-span-2">
                              <button
                                  onClick={(e)=>{handleSubmit(e)}}
                                  type="submit"
                                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                              >
                                  {submitted ? "Submitted!" : "Let's talk"}
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
    </Layout>
  );
}

export default ContactPage;
