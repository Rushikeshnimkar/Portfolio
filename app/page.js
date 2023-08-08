
import React from 'react'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Dancing_Script } from 'next/font/google';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareSnapchat } from '@fortawesome/free-brands-svg-icons';

const dance=Dancing_Script({
 preload:false
  

});



//<FontAwesomeIcon icon="fa-brands fa-linkedin" />



const Home = () => {
  return (
    <div className="bg-fixed bg-[url('../public/background.png')] bg-cover bg-center h-screen">
      <h1 className={`${dance.className} text-violet-600 text-8xl pt-24 pl-10`}>Hello!</h1>
      <p className=' text-8xl pl-10'>I'm <a className={`${dance.className} text-violet-600`}>Rushikesh Nimkar</a></p>
  <ol className='flex text-3xl pl-36 pt-<3'> 
    <li className='pr-5'>⏺️Developer</li>
    <li className='pr-5'>⏺️Photographer</li>
    <li className='pr-5'>⏺️Traveller</li>
    
  </ol>
  
   <div className='pl-60 pt-3'>
      <FontAwesomeIcon
      className='pr-10'
        icon={faLinkedin}
        style={{  fontSize: 64 }}
      />
      <FontAwesomeIcon 
      className='pr-10'
      icon={faGithub} 
      style={{  fontSize: 64 }} />
      <FontAwesomeIcon 
      className='pr-10'
      icon={faInstagram} 
        style={{ fontSize:64}}
      />
      <FontAwesomeIcon 
      className='pr-10'
      icon={ faSquareSnapchat} style={{fontSize:64}} />
    </div>
    


 </div>
    
  )
}

export default Home