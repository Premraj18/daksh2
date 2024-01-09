import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const {scrollY} = useScroll();

    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY,'change', (latest) => {
        if(latest > 20){
            setHidden(true);
        }else{
            setHidden(false)
        }
    })
  

  return (
    <div className="bg-black sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flex flex-col w-full justify-center items-center space-y-8 my-5">
                    <Link to={'/'} className="text-sm font-medium text-white hover:text-lime-600">
                      HOME
                    </Link>
                    <Link to={'/about'} className="text-sm font-medium text-white ">
                      ABOUT US
                    </Link>
                    <Link to={'/achivements'} className="text-sm font-medium text-white ">
                      ACHIEVEMENTS
                    </Link>
                    <Link to={'/gallery'} className="text-sm font-medium text-white ">
                      GALLERY
                    </Link>
                    <Link to={'/ourteam'} className="text-sm font-medium text-white ">
                      OUR TEAM
                    </Link>
                    <Link to={'/sponser'} className="text-sm font-medium text-white ">
                      SPONSOR US
                    </Link>
                    <Link to={'/contact'} className="text-sm font-medium text-white ">
                      CONTACT US
                    </Link>
                  </div>
                  <div className="flex gap-5 items-center justify-center pt-10">
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsInstagram size={25} /></a>
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsFacebook size={25} /></a>
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsLinkedin size={25} /></a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <motion.header className="relative h-20"
         variants={{
          visible:{background:'transparent'},
          hidden: {backgroundColor:'black'},
        }}
        animate={hidden?"hidden":"visible"}
        transition={{duration:0.35, ease:"easeInOut"}} 
      >
        {/* <p className="flex h-5 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav aria-label="Top" className="h-full px-4 sm:px-6 lg:px-8 shadow-xl ">
          <div className="">
            <div className="flex h-20 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-black p-2 text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="flex justify-between w-full">
                <div className="ml-4 flex lg:ml-0">
                  <Link to={'/'} className='flex'>
                    <div className="flex ">
                      <Link className=' text-2xl font-bold text-white  px-10 py-1 rounded'><img src="/logo3.png" className='w-40 ' alt="" /></Link>
                    </div>
                  </Link>
                </div>

                {/* <div className="ml-auto flex items-center"> */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center justify-end xl:space-x-8 lg:space-x-6">

                  <Link to={'/'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    HOME
                  </Link>
                  <Link to={'/about'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    ABOUT US
                  </Link>
                  <Link to={'/achivements'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    ACHIEVEMENTS
                  </Link>
                  <Link to={'/gallery'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    GALLERY
                  </Link>
                  <Link to={'/ourteam'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    OUR TEAM
                  </Link>
                  <Link to={'/sponser'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    SPONSOR US
                  </Link>
                  <Link to={'/contact'} className="text-sm font-medium text-white hover:text-lime-600 hover:scale-110">
                    CONTACT US
                  </Link>

                </div>

                {/* Search */}
                {/* <div className="flex lg:ml-6 items-center">
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsInstagram size={23} /></a>
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsFacebook size={23} /></a>
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsLinkedin size={23} /></a>
                </div> */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </motion.header>
    </div >
  )
}