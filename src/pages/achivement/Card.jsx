import React, { useContext } from 'react'
import {motion} from 'framer-motion'

const Card = (props) => {


    return (
        <>
            <motion.div
                className="block w-full sm:w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"   
                    whileHover={{boxShadow:'0 0 15px #84cc16'}}
                    transition={{duration:0.5}}
                    style={{ 
                        backgroundColor: mode === 'dark' ? '#dddfe3y' : '', 
                        boxShadow: mode === 'dark' ? '0 0 12px white' : '0 0 20px lightgray', 
                    }}
                >
                <a href="#!">
                    <img
                        className="rounded-t-lg"
                        src={props.imgUrl}
                        alt="" />
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                        {props.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 ">
                        {props.description}
                    </p>
                    
                </div>
            </motion.div>
        </>
    )
}

export default Card