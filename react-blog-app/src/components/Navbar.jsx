import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// react icons
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from 'react-icons/fa6'
import Model from './Model';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    //nav items
    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/contact', link: 'Contact' },
        { path: '/services', link: 'Services' },
        { path: '/about', link: 'About' },
    ]
    
    // model details
    const openModel = () =>{
        setIsModelOpen(true)
    }
    const closeModel = () =>{
        setIsModelOpen(false)
    }
    
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0 '>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>Blog <span className='text-orange-500'>App</span></a>
                

                {/* navItems for lg devices */}
                {/* <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path,link}) => <li className='text-white' key={path}>
                            <NavLink className={({path, link}) => <li className='text-white' key={path}>
                                <NavLink className={({isActive, isPending}) =>
                                isActive? 'active'
                                :isPending
                                ? 'pending'
                                :""
                            }>{link}</NavLink>
                            </li>} to={path}>{link}</NavLink>
                        </li> )
                    }
                </ul> */}
                {/* <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map(({ path, link }) => (
                        <li key={path}>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                            isActive ? 'text-orange-500 underline underline-offset-4' : 'text-white hover:text-orange-500'
                            }
                        >
                            {link}
                        </NavLink>
                        </li>
                    ))}
                    </ul> */}
                    <ul className='md:flex gap-12 text-lg hidden'>
                        {navItems.map(({ path, link }) => (
                            <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? 'active'  // This class is defined in your app.css
                                    : isPending
                                    ? 'pending'
                                    :  ''
                                }
                            >
                                {link}
                            </NavLink>
                            </li>
                        ))}
                        </ul>


                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
                    <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

                {/* our model component is here */}
                <Model isOpen={isModelOpen} onClose={closeModel}/>

                {/* mobile menu btn, display mobile screen */}

                <div className='md:hidden'>
                    <button
                    onClick={toggleMenu}
                    className='cursor-pointer'>
                        {
                            isMenuOpen? <FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>
                        }
                    </button>
                </div>
            </nav>

            {/* menu items for mobile */}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen? 'fixed top-0 left-0 w-full transition-all ease-out duration-150':'hidden'}`}>
                    {
                        navItems.map(({path,link}) => <li className='text-black' key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li> )
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar
