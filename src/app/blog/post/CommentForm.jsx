import React from 'react'
import { GoDotFill } from 'react-icons/go'

export default function CommentForm() {
    return (
        <>
            <div className="py-6">
                <h1 className="text-4xl font-bold mb-2">Leave a Reply</h1>
                <p className="mb-6 text-gray-600">Your email address will not be published. Required fields are marked *</p>

                <form>
                    <div className="mb-6">
                        <textarea
                            id="comment"
                            className="w-full h-60 p-3 border border-black rounded-2xl bg-transparent focus:border-transparent"
                            placeholder='Your comment *'
                            required
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent"
                                placeholder='Your Name *'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent"
                                placeholder='Your Email *'
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <input
                            type="url"
                            id="website"
                            className="w-full p-3 border border-black bg-transparent rounded-[50px] focus:border-transparent"
                            placeholder='Website'
                        />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                            <span className="text-sm text-gray-700">Save my name, email, and website in this browser for the next time I comment.</span>
                        </label>
                    </div>

                    <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[200px]  text-lg overflow-hidden flex items-center mt-10`}>
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                        <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                            <GoDotFill className="text-[#f8a065]" />
                            <span className="sliding-text hidden group-hover:block">POST COMMENT</span>
                            <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                            <span className="sliding-text hidden group-hover:block">POST COMMENT</span>
                            <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                            <span className="sliding-text">POST COMMENT</span>
                        </div>
                    </button>
                </form>
            </div>
        </>
    )
}
