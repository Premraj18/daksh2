import React, { useRef, useState } from 'react'
import Card from './Card'
import Data from './data.json'
import Layout from '../../components/Layout'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion, useScroll, useTransform } from 'framer-motion'

const Achivement = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

    return (
        <Layout>
            <>
                <div>
                    <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

                    <div className="min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url(" + "/gogreen2.png" + ")",
                        }}

                    >
                        <div className='w-full h-[500px]'
                            style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
                        >

                        </div>
                    </div>

                    <div className='h-[600px] bg-slate-900 text-white text-lg'>
                        Scroll Up and Down this page to see the parallax scrolling effect.
                        This div is just here to enable scrolling.
                        Tip: Try to remove the background-attachment property to remove the scrolling effect.
                    </div>
                </div>
            </>

        </Layout>
    )
}

export default Achivement

