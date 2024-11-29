import React from 'react'

const ContactUs = () => {
    return (
        <section className=' bg-primary-3 px-24 py-8 text-white'>
            <div className="h-full w-full flex md:flex-row justify-between">
                <div className="w-[45%] grid grid-cols-2 items-center justify-center gap-4">
                    <div className="flex flex-col gap-4">
                        <a href="https://www.youtube.com/">
                            <img src="/images/ContactUs/Youtube.png" alt="" className="object-cover w-full h-full" draggable="false" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="/images/ContactUs/Instagram.png" alt="" className="object-cover w-full h-full" draggable="false" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://www.gmail.com/">
                            <img src="/images/ContactUs/Gmail.png" alt="" className="object-cover w-full h-full" draggable="false" />
                        </a>
                        <a href="https://www.x.com/">
                            <img src="/images/ContactUs/Twitter.png" alt="" className="object-cover w-full h-full" draggable="false" />
                        </a>
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <div className="pb-4">
                        <h1 className='text-4xl font-semibold pb-4'>Get In Touch</h1>
                        <p className='text-base font-semibold'>We’d love to hear from you! Whether you have a question, need assistance, or want to share feedback, feel free to reach out. Fill out the form below, and we’ll get back to you as soon as possible.</p>
                    </div>
                    <form
                        action="https://formspree.io/f/mdkopakl" method="POST"
                        class="w-full text-black ">
                        <input
                            type="hidden"
                            name="access_key"
                            value="53e9333c-266c-4f4c-8613-93a45f63a91e"
                        />
                        <div class="mb-4">
                            <label for="name" class="block text-white text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-4"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-white text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-4"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label for="subject" class="block text-white text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-4"
                                placeholder="Subject"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label for="message" class="block text-white text-sm font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-4"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-primary-4 text-white font-medium py-2 rounded-3xl hover:bg-teal-500 transition duration-300"
                        >
                            Send Now!
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
