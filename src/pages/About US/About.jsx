import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    return (
        <>
            <Layout>
                <div className='h-full w-full ' style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
                    <div className='flex w-full flex-wrap md:gap-x-20 justify-center text-white'>
                        <motion.div className="justify-center flex-1 max-w-6xl py-4 mx-auto md:px-6 hidden sm:block mb-20"
                            variants={variants}
                            initial='initial'
                            whileInView='animate'
                        >
                            <div className='w-full text-center mt-12 mb-20'>
                                <h2 className='text-xl sm:text-4xl'>Welcome To <span className='text-lime-600'>Team Daksh</span></h2>
                            </div>
                            <div className="flex flex-wrap ">
                                <motion.div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0" variants={variants}>
                                    <div className="relative lg:max-w-md">
                                        <motion.img src="/about.jpg" alt="aboutimage"
                                            className="relative z-10 object-cover w-full rounded h-96" variants={variants} />
                                        <motion.div
                                            className="absolute bottom-0 right-0 z-10 p-6 bg-white border-4 border-lime-600 rounded shadow dark:border-lime-500 lg:-mb-8 lg:-mr-11 sm:p-6  ">
                                            <p className="text-xl font-semibold md:w-72 text-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    className="absolute top-0 left-0 w-16 h-16 text-lime-600 dark:text-gray-300 opacity-10"
                                                    viewBox="0 0 16 16" variants={variants}>
                                                    <path
                                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                                    </path>
                                                </svg> We Work Together, Perform Together, Achieve Together
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 " variants={variants}>
                                    <motion.div className="pl-4 mb-6 border-l-4 border-lime-600 " variants={variants}>
                                        <span className="text-lg md:text-xl  uppercase text-white ">Who we are?</span>
                                    </motion.div>
                                    <motion.p className="mb-6 text-base leading-7 text-gray-100 " variants={variants} >
                                        Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                                        We also proudly claims the first position as the official club at NIT Jamshedpur.
                                        Team Daksh was started in the year 2009 by a small group of students who have their
                                        own determination to Explore the mechanism of ATVs. Every year we participates in
                                        BAJA SAE and holds top position among all the teams. Our Team under the guidance
                                        of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                                        from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                                        with the electrifying power of electricity.
                                    </motion.p>

                                </motion.div>
                            </div>
                        </motion.div>
                        <div className='text-white'>
                            <div className='flex flex-wrap  justify-center mb-4'>
                                <div className='rounded-md  w-1/2 md:w-2/3 h-full' >
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl  mb-4'>About <span className='text-lime-600'>us</span></h1>
                                    <p className='text-sm md:text-base text-gray-100'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg" className='w-full h-32 rounded-md object-cover ml-2 ' alt="Project" />
                                </div>
                            </div>
                            <div className='flex md:flex-wrap flex-wrap-reverse justify-center mt-4 mb-4'>
                                <div>
                                    <img src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg" className='w-full h-32 rounded-md object-cover items-center' alt="Project" />
                                </div>
                                <div className='rounded-md  w-1/2 md:w-2/3 h-full ml-2' >
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl  mb-4'>Our <span className='text-lime-600'>Mission</span></h1>
                                    <p className='text-sm md:text-base text-gray-100'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-wrap  justify-center mt-4 mb-20'>
                                <div className='rounded-md  w-1/2 md:w-2/3 h-full' >
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl  mb-4'>Welcome to <span className='text-lime-600'>Topic</span></h1>
                                    <p className='text-sm md:text-base text-gray-100'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div>
                                    <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180" className='w-full h-32 rounded-md object-cover ml-2 items-center' alt="Project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About
