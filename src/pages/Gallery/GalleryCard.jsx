import React, { useContext } from 'react'
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
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
}

const GalleryCard = ({ item }) => {
    return (
        <>
            {/* <motion.div className=''>
                <motion.div className=''
                    variants={variants}
                    initial='initial'
                    whileInView='animate'
                > */}
                    <div className="dabba w-full">
                        <div className='slider'>
                            {item.map((d) => {
                                return (
                                    // <motion.div
                                    //     key={d.id}
                                    //     className="block border-4 h-80 mb-12 border-lime-600 w-full sm:w-80 rounded-lg bg-white" variants={variants}>
                                    //     <a href="#!">
                                    //         <div className=" h-full">
                                    //             <motion.img
                                    //                 className="rounded-lg h-full  w-full"
                                    //                 src={d.imgUrl}
                                    //                 initial={{scale:1}}
                                    //                 whileHover={{scale:1.2, boxShadow:'0 0 15px #3b3f47'}}
                                    //                 transition={{duration:0.4}}
                                    //                 alt="" />
                                    //         </div>
                                    //     </a>
                                    // </motion.div>
                                    <span style={{ '--i': d.id }}><img src={d.imgUrl} alt="" /></span>
                                )
                            })}
                        </div>
                    </div>
                {/* </motion.div>
            </motion.div> */}
            <div className='container sm:hidden w-full'>
                <div className='flex justify-center md:gap-x-16 gap-y-10 flex-wrap'>
                    {item.map((d) => {
                        return (
                            <div
                                key={d.id}
                                className="block border-4 h-80 mb-12 border-lime-600 w-full sm:w-80 rounded-lg bg-white">
                                <a href="#!">
                                    <img
                                        className="rounded-t-lg h-full  w-full"
                                        src={d.imgUrl}
                                        alt="" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default GalleryCard
