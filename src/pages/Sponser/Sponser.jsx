import React from 'react'
import Layout from '../../components/Layout'
import { FaHandshake } from "react-icons/fa6";
import { BsDownload } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sponser = () => {
    return (
        <Layout>
            <div>
                <div className=" h-[400px] md:min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url(" + "/sponserus.jpg" + ")",
                    }}

                >
                    <div className='w-full h-[500px]'
                        style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
                    >

                    </div>
                </div>

                <div className="bg-black min-h-screen text-white">
                    <div className="flex flex-col justify-center p-8 sm:p-16">
                        <h1 className="text-4xl sm:text-5xl text-center  py-4">
                            Sponsor <span className="text-lime-500">Us</span>
                        </h1>
                        <h2 className='text-white text-center text-lg my-2 py-2 sm:text-3xl '>Be a Part of Our Journey!</h2>
                        <hr className='border-lime-600 border-2 w-[220px] sm:w-[400px] m-auto'/>
                        <p className="text-lg mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque nostrum provident fuga repellat ullam, dolorem eveniet odit deserunt! Enim aliquid nulla tempora consequuntur a ipsum, pariatur natus maiores consequatur neque assumenda incidunt, voluptatem ipsa molestiae! Sunt eius inventore itaque dolorem, deserunt aspernatur aut cum fugiat odio consectetur nobis quod.

                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row text-md justify-around text-lime-500 mt-8">
                        <div className="m-6 flex flex-col items-center">
                            <h1 className="text-lg sm:text-2xl mb-2">Become Our Partner</h1>
                            <Link to='/partner' className='text-white my-4'>
                                <FaHandshake size={50}/>
                            </Link>
                        </div>

                        <div className="m-6 flex flex-col items-center md:mr-20">
                            <h1 className="text-lg sm:text-2xl mb-2">Donate</h1>
                            <a href='mailto:daksh.nitjsr@nitjsr.ac.in ' className='text-white my-4'>
                                <FaDonate size={50}/>
                            </a>
                        </div>

                        <div className="m-6 flex flex-col items-center">
                            <h1 className="text-lg sm:text-2xl mb-2">Brochure</h1>
                            <a download='brouchre' href='/brouchre.pdf' className='text-white my-4'>
                                <BsDownload size={50}/>
                            </a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </Layout>

    )
}

export default Sponser
