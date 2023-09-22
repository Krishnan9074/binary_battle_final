'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoginDropdown from './LoginDropdown';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faMagento } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const logoMain = "/src/app/Components/logo.png";
  const router=useRouter();
  const logout = () => {
    sessionStorage.setItem('Token2', "asfasfa");
    sessionStorage.removeItem('Token1');
    sessionStorage.removeItem('user.email');
    sessionStorage.removeItem('user.uid');
    router.push('/');
  }
  useEffect(() => {
    let token2 = sessionStorage.getItem('Token2')
    if(token2){
      router.push('/')
  }
}, [])
  return (
    <nav className="bg-[#06081d] bg-opacity-80 p-4 flex items-center justify-between w-screen">
      {/* Logo */}
      <div className="flex items-center space-x-2">
      <img
          src="https://ik.imagekit.io/jmd1/logo.png?updatedAt=1695337750981" // Replace with the actual path to your image
          alt="Description of the image"
          width={100} // Specify the width of the image
          height={50} // Specify the height of the image
        />
        <span className="text-white text-lg font-semibold"></span>
      </div>

      {/* Center Buttons */}
      <div className="space-x-6 flex">
        <Link href="round1">
          <div className="px-8 py-2 mr-3 ml-8 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
            <FontAwesomeIcon icon={faPuzzlePiece} className='px-2 h-5 w-5'/> 
            Analytical Arena
          </div>
        </Link>

        <Link href="r2">
          <div className="px-8 py-2 mr-3 ml-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
          <FontAwesomeIcon icon={faMagento} className='px-2 h-5 w-5'/>
            Labyrinthine Odessey
          </div>
        </Link>

        <Link href="r3">
          <div className="px-8 py-2 ml-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
          <FontAwesomeIcon icon={faLock} className='px-2 h-5 w-5'/>
            The Enigma
          </div>
        </Link>
        <Link href="Scoreboard">
          <div className="px-8 py-2 ml-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
          <FontAwesomeIcon icon={faLock} className='px-2 h-5 w-5'/>
            Scoreboard
          </div>
        </Link>
      </div>

      {/* Right Corner Login Button */}
      {/* <button className="bg-cyan-600 w-[6%] hover:bg-cyan-900 text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out">
        Login
      </button> */}

<div className="relative inline-block text-left">
        <button

        onClick={logout}
        className="mr-8 bg-cyan-600 hover:bg-cyan-900 w-[5vw] text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out text-white focus:outline-none focus:ring focus:ring-cyan-300"
      >
        Logout
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
