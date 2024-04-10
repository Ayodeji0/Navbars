
import { BeakerIcon, Bars3BottomLeftIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header = () => {
  const Links = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/Service" },
    { name: "About", url: "/About" },
    {name: "Contact", url: "/Contact"}
  ];

  let [isOpen, SetisOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
    <div className='md:px-10 py-4 px-7 md:flex justify-between bg-white'>
    {/* LOGO */}
    <div className='flex gap-2 cursor-pointer text-2xl items-center'>
      <BeakerIcon className='w-7 h-7 text-blue-500'/>
      <span>Lumcoin</span>
    </div>
    {/* Menu Icon */}
    <div onClick={()=> SetisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 md:hidden cursor-pointer'>
      {
        isOpen ?  <XMarkIcon/> : <Bars3BottomLeftIcon/> 
      }
    </div>
    {/* navLINKS */}
    <div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] 
    left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}
>
    {Links.map(link => (
      <li key={link.url} className=' font-semibold my-7 md:my-0 md:ml-8'>
        <a href={link.url}>{link.name}</a>
      </li>
    ))}
    <button className='btn bg-indigo-600 text-white py-1 px-2 rounded-md md:ml-8 md:static'>Get Started</button>
  </ul>
    </div>
    </div>
    </div>
    
  )
}

export default Header;
