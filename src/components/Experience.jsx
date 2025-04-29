import React from 'react'
import clanaguage from '../assets/clanguage.png'
import cplusplus from '../assets/cplusplus.png'
import css from '../assets/css.jpg'
import html from '../assets/html.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.jpg'
import mysql from '../assets/mysql.png'
import nodejs from '../assets/node.png'
import python from '../assets/python.webp'
import reactjs from '../assets/reactjs.png'
import tailwindcss from '../assets/tailwindcss.png'
import typescript from '../assets/Typescript.png'
import oops from '../assets/oops.png';
import api from '../assets/API.png';
import DBMS from '../assets/dbms.webp';


const Experience = () => {
    const cardItems=[
        {
            id:1,
            logo: clanaguage,
            name: "C#",
        },
        {
            id:2,
            logo: cplusplus,
            name: "C++",
        },
        {
            id:3,
            logo: css,
            name: "CSS",
        },
        {
            id:4,
            logo: html,
            name: " HTML",
        },
        {
            id:5,
            logo: java,
            name:"JAVA",
        },
        {
            id:6,
            logo: javascript,
            name:"JavaScript",
        },
        {
            id:7,
            logo: mongodb,
            name:"MongoDB",
        },
        {
            id:8,
            logo: mysql,
            name:"MySQL",
        },
        {
            id:9,
            logo: nodejs,
            name:"NodeJS",
        },
        {
            id:10,
            logo: python,
            name:"Python",
        },
        {
            id:11,
            logo: reactjs,
            name:"ReactJS",
        },
        {
            id:12,
            logo: tailwindcss,
            name:"TailwindCSS",
        },
        {
            id:13,
            logo: typescript,
            name:"TypeScript",
        },
        {
            id:14,
            logo: oops,
            name:"OOPs",
        },
        {
            id:15,
            logo:api,
            name: "REST APIs"
        },
        {
            id:16,
            logo: DBMS,
            name:"DBMS",
        }
    ]

    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className="text-5xl font-semibold text-gray-800 gap-2 text-center">
                    Experience
                </h1>
                <br/>
                <span className='text-lg  text-gray-500 ml-105'>Technologies I've explored, built with, and continue to grow in.</span>
                <br/>
                <br/>

                

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-5 mx-15">
                    {
                        cardItems.map(({id,logo,name}) => (
                            <div key={id} className="md:w-[250px] h-[180px] border=[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 rounded-full">
                                <img className="w-[120px] h-[120px] p-1 rounded-full border-[2px] border-gray-200 ml-15 mt-4=3" src={logo} alt="" />
                                <div>
                            
                                    <div className="font-bold text-[#6c63ff] text-xl mb-2 mt-3 ml-20 hover:text-blue-800 ">{name}</div>
                                   
                                </div>

                            </div>
                        )) 
                    }
                </div>
                
            </div>

        </div>
    )
}

export default Experience