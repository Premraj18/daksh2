import React, { useContext } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const Data = [
    {
        "id": "1",
        "title": "BAJA SAE INDIA 2010:",
        "description1": "Best Engineering Design Award.",
        "description2": "1st Position In least Emission Category.",
    },
    {
        "id": "2",
        "title": "BAJA SAE SOUTH AFRICA 2010:",
        "description1": "Safest Vechile Award.",
        "description2": "",
    },
    {
        "id": "3",
        "title": "BAJA SAE INDIA 2011:",
        "description1": "Go Green Award.",
        "description2": "3rd Position In Endurance.",
    },
    {
        "id": "4",
        "title": "BAJA STUDENT INDIA 2016:",
        "description1": "12th Overall.",
        "description2": "5th Position In Desidn Event.",
    },
    {
        "id": "5",
        "title": "BAJA STUDENT INDIA 2015:",
        "description1": "6th Overall.",
        "description2": "2nd Position In Sales Report.",
    },
    {
        "id": "6",
        "title": "BAJA SAE INDIA 2016:",
        "description1": "25th Overall.",
        "description2": "3rd Position In Endurance Race.",
    },
    {
        "id": "7",
        "title": "BAJA SAE INDIA 2018:",
        "description1": "1st In Baja Virtuals.",
        "description2": "Runner Up In GO GREEN Event.",
    },
    {
        "id": "8",
        "title": "BAJA SAE INDIA 2019:",
        "description1": "1st Position in GO GREEN ",
        "description2": "12th In Baja Virtuals",
    },
    {
        "id": "9",
        "title": "BAJA SAE INDIA 2021:",
        "description1": "Overall 4th Position Among All NITS.",
        "description2": "",
    },

    {
        "id": "10",
        "title": "BAJA SAE INDIA 2023:",
        "description1": "1st Positiom Among All NITS.",
        "description2": "29th Overall",
    },

]

const Achivement = () => {

    return (
        <div className="w-full  mb-2"
            style={{
                backgroundImage: "url(" + "/gogreen2.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="h-full w-full justify-center items-center flex-1 "
                style={{
                    background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'
                }}
            >

                <motion.div className='w-full text-white pt-8 sm:pt-20 flex-wrap flex justify-center gap-x-12 gap-y-8 md:gap-y-0'
                    variants={variants}
                    initial='initial'
                    whileInView='animate'
                >
                    <div className='w-full mb-20'>
                        <h2 className='w-full text-3xl text-center md:mt-6 text-white font-semibold md:text-5xl'>Our <span className='text-lime-600'>Achivements</span></h2>
                    </div>
                    {
                        Data.map((d) => {
                            return (
                                <motion.div key={d.id} className='py-3 px-5 md:mb-20 sm:px-8 border-2 w-80 sm:w-[400px] text-sm rounded-3xl'
                                    variants={variants}
                                >
                                    <motion.h2>{d.title}</motion.h2>
                                    <motion.p>{d.description1}</motion.p>
                                    <motion.p>{d.description2}</motion.p>
                                </motion.div>

                            )
                        })
                    }
                    {/* <div className='border-2 w-[400px] h-16 rounded-[100px] border-lime-600'>

                    </div>
                    <div className='border-2 w-[400px] h-16 rounded-[100px] border-lime-600'>

                    </div>
                    <div className='border-2 w-[400px] h-16 rounded-[100px] border-lime-600'>

                    </div> */}
                </motion.div>

            </div>
        </div>
    )
}

export default Achivement
