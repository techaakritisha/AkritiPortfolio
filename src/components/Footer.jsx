import React from 'react'
import { FaLinkedin , FaMedium , FaGithub , FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
     <>
       <hr/>
       <footer  className="py-12" >
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
             <div className="flex flex-col items-center justify-center">
                <div className="flex space-x-4">
                    
                    <FaLinkedin size={30} />
                    <FaMedium size={30}/>
                    <FaGithub size={30} />
                    <FaXTwitter size={30} />

                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col item-center" >
                    <p className="text-center">
                        &copy; Signed with 💻, styled with 💜, and shipped with purpose — thanks for stopping by.
                    </p>
                    <p className="text-lg mt-2 text-center" >
                    &lt;MadeBy name="Akriti" with="❤️" /&gt;
                    </p>

                </div>
             </div>
          </div>
       </footer>
     </>
  )
}

export default Footer