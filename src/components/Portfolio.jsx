import React from 'react'
import DhanRakshak from '../assets/DhanRakshak.png'
import SheGrow from '../assets/she-grow.png'
import fitnessApp from '../assets/fitness-app.png'
import employeeManagement from '../assets/employee_management.jpg'


const Portfolio = () => {
    const cardItems=[
        {
            id:1,
            logo: SheGrow,
            name: "SheGrow",
            description:"SheGrow revolutionizes women's financial access with AI-driven credit scoring and real-time loan tracking. The platform simplifies complex banking processes through intuitive dashboards and automated approvals, empowering users with transparent financial tools.",
            demoLink:"https://she-grow.vercel.app/",
            sourceCode:"https://github.com/techaakritisha/She-Grow",
        },
        {
            id:2,
            logo: DhanRakshak,
            name: "DhanRakshak",
            description:"DhanRakshak transforms tax filing with an AI chatbot that interprets regulations in plain language. Its automated calculations and live updates eliminate errors while keeping users compliant with evolving tax laws.",
            demoLink:"https://dhanrakshaktaxassistant.vercel.app/",
            sourceCode:"https://github.com/techaakritisha/DhanRakshak",
        },
        {
            id:3,
            logo: fitnessApp,
            name: "FitnessApp",
            description:"Workout Wizard delivers personalized fitness plans with form-correcting video guidance. The app tracks biometrics and adapts routines in real-time, creating a tailored workout experience for all skill levels.",
            demoLink:"https://remarkable-torte-b02685.netlify.app/",
            sourceCode:"https://github.com/techaakritisha/Workout-Wizard",
        },
        {
            id:4,
            logo: employeeManagement,
            name: "TalentForage",
            description:"TalentForge optimizes HR workflows with role-based access controls and real-time analytics. The system centralizes employee data with intelligent filtering for efficient team management at scale.",
            demoLink:"https://github.com/techaakritisha/TalentForge",
            sourceCode:"https://github.com/techaakritisha/TalentForge",
        }
    ]
    return (
        <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className="text-5xl font-semibold text-gray-800 gap-2 text-center">
                    Projects
                </h1>
                <br/>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5 mx-15">
                    {
                        cardItems.map(({id,logo,name,description,demoLink,sourceCode}) => (
                            <div key={id} className="md:w-[370px] h-[420px] border=[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ">
                                <img className="w-[120px] h-[120px] p-1 rounded-full border-[2px] border-gray-200 ml-20" src={logo} alt="" />
                                <div>
                            
                                    <div className="font-bold text-[#6c63ff] text-xl mb-2 mt-3 ml-2 ">{name}</div>
                                    <p className="ml-2 text-gray-500 ">{description}</p>
                                </div>

                                
                                <div className="mt-4">
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-[#6c63ff] hover:bg-blue-600 text-white font-bold py-1 px-6 ml-10 rounded-2xl inline-block'>
                                    Demo
                                </a>
                                <a
                                    href={sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-1 mt-2 ml-12 mr-3 rounded-2xl inline-block'
                                >
                                    Source Code
                                </a>
                            </div>
                            </div>
                        )) 
                    }
                </div>
                
            </div>

        </div>
    )
}

export default Portfolio