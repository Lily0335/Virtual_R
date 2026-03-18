import React from 'react'
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-center tracking-wide">
            VirtualR build tools 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "} 
            for developers
            </span>

        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Empowering developers with cutting-edge tools to create immersive virtual reality experiences. Our platform provides a seamless development environment, robust APIs, and comprehensive documentation to help you bring your VR projects to life. Whether you're a seasoned developer or just starting out, our tools are designed to enhance your creativity and streamline your workflow. 

        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
             Strt for free  
            </a>
        </div>
    </div>
  )
}

export default HeroSection