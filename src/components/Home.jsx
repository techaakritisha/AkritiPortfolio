import React from 'react'

import pic from "../assets/akriti.jpeg";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

import { ReactTyped } from "react-typed"



const Home = () => {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
                <div className='flex flex-col md:flex-row'>
                    
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                      <span className='text-xl' >Welcome—where my journey meets bytes of curiosity!</span>
                      <div className='flex space-x-2 text-2xl md:text-4xl'>
                           <h1>Hello, I'm a</h1>
                           {/* <span className='text-red-700 font-bold' > Developer </span> */}

                           <ReactTyped className='text-[#6c63ff] font-bold' strings={["Developer", "Programmer","Contributor"]} typeSpeed={40} backSpeed={50} loop={true}  />
                           
                      </div>

                      <br/>
                      
                      <p className='text-sm md:text-md text-justify'>
                        I am  someone who genuinely enjoys writing clean, readable code and fixing bugs that love showing up five minutes before a deadline. Most of my days revolve around building web apps, breaking them(unintentionally), and then fixing them like a proud developer. JavaScript, React, and a good logic puzzle are my jam- and yes, Coffee is my co-pilot throught it all. Somewhere between caffeine and curiosity, I even made it to the <span className='text-[#6c63ff] font-semibold'>finals of Google Girl Hackathon 2025</span> . And honestly, I still Google basic Git commands more often that I'd like to admit.
                      </p>

                      <br/>

                      {/*Social Media */}

                      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                      <div className="space-y-3 ">
                        <h1 className="font-bold" >Available on</h1>
                        <ul className="flex space-x-5">
                          <li>
                            <a href="https://x.com/aakriti_shakya6">
                            <FaXTwitter className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/akriti-shakya-61639b259/">
                            <FaLinkedin className='text-2xl cursor-pointer' />
                            </a>
                          </li>

                          <li>
                            <a href="https://github.com/techaakritisha">
                            <FaGithub className='text-2xl cursor-pointer' />
                            </a>
                          </li>

                        </ul>
                      </div>
                      
                      {/* Current Working on  */}
                      <div className='space-y-3'>
                      <h1 className="font-bold" >Coding Profiles</h1>
                        <div className="flex space-x-5">
                        <ul className="flex space-x-5">
                          <li>
                            <a href="https://codeforces.com/profile/aakritishakya356">
                            <SiCodeforces className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                          <li>
                            <a href="https://leetcode.com/u/Aakriti_465/">
                            <SiLeetcode className='text-2xl cursor-pointer' />
                            </a>
                          </li>

                          <li>
                            <a href="https://www.geeksforgeeks.org/user/aakritispd1r/">
                            <SiGeeksforgeeks className='text-2xl cursor-pointer' />
                            </a>
                          </li>

                          <li>
                            <a href="https://medium.com/@aakritishakya35">
                            <FaMedium  className='text-3xl cursor-pointer' />
                            </a>
                          </li>
                        </ul>
                        </div>
                      </div>
                      </div>

                    </div>

                    {/* //58min */}

                    <div className='md:w-1/2 mt-8 md:ml-45 md:mt-16 order-1'>
                           <img src={pic} className="rounded-full  md:w-100 md:h-100" alt="" />
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Home


//44minutes done