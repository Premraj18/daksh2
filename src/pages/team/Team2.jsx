import React from 'react'
import Layout from '../../components/Layout'

const Team2 = () => {
    return (
        <Layout>
            <div className='h-full '>
                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img1.JPG" + ")",

                    }}
                >

                </div>

                <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                    <h3 className='text-center text-3xl w-full mt-4 text-lime-600 '>WHAT WE DO</h3>
                    <p className='text-lg my-8'>BAJA SAE is a student-level competition in which more than 150 teams compete against
                        each other in designing a ‘single seater off-road four-wheel buggy’ with restrictions imposed on the engine.
                        We Design, Manufacture, Test and Validate buggy abiding by the BAJA SAE Rulebook. Team Predators Racing is
                        one of the oldest teams in BAJA SAEINDIA and has been in racing for 13 years. Since its participation in 2009,
                        a wealth of experience and guidance from the predator family has helped us to work through the tough times..</p>
                    <div className="w-full mb-10 text-center">
                        <a href="#"
                            className=" px-4 py-2 text-gray-100  border-lime-700 rounded-3xl border-2  dark:hover:bg-lime-700 hover:bg-lime-700">
                            Learn more
                        </a>
                    </div>
                </div>

                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img2.jpg" + ")",


                    }}
                >
                </div>

                <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                    <h3 className='text-center text-3xl w-full mt-4 text-lime-600 '>WHO WE ARE</h3>
                    <p className='text-lg my-8'>
                        We are a group of highly passionate, hardworking and enthusiastic students who
                        found their interest in off-roading and rose towards becoming a predator. Let’s
                        meet the engineers who found their place in today’s complicated and fast-moving
                        world and do what they love i.e. Design, Build and Compete.
                    </p>
                    <div className="w-full mb-10 text-center">
                        <a href="#"
                            className=" px-4 py-2 text-gray-100  border-lime-700 rounded-3xl border-2  dark:hover:bg-lime-700 hover:bg-lime-700">
                            Learn more
                        </a>
                    </div>
                </div>

                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img3.jpg" + ")",

                    }}
                >
                </div>

                <div className='relative'>
                    <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                        <h3 className='text-center text-3xl w-full mt-4 text-lime-600 '>WHO WE ARE</h3>
                        <p className='text-lg my-8'>
                            We are a group of highly passionate, hardworking and enthusiastic students who
                            found their interest in off-roading and rose towards becoming a predator. Let’s
                            meet the engineers who found their place in today’s complicated and fast-moving
                            world and do what they love i.e. Design, Build and Compete.
                        </p>
                        <div className="w-full mb-10 text-center">
                            <a href="#"
                                className=" px-4 py-2 text-gray-100  border-lime-700 rounded-3xl border-2  dark:hover:bg-lime-700 hover:bg-lime-700">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Team2
