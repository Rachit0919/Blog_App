import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaClock, FaUser} from 'react-icons/fa'
import SideBar from '../components/SideBar';

function SingleBlog() {
      const data = useLoaderData() ;
      const {title, image, category, author, published_date, reading_time, content} = data[0]
    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
            </div>

            {/* Blog details */}

            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className='lg:w-3/4 mx-auto'>
                    <div>
                        <img src={image} alt="" className='w-full mx-auto rounded'/>
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4  text-blue-500 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                    <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                    <p className='text-base text-gray-500 mb-6'>{content}</p>
                    <div className='text-base text-gray-500'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>

                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero ducimus in doloribus impedit voluptates atque, libero, porro, molestiae repudiandae quam exercitationem culpa deserunt accusamus fugit ratione non possimus consequatur repellendus ad et velit ipsam excepturi. Autem illum aperiam quasi magni molestias, fugit doloribus eos!
                        <br />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                        <br />

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fuga temporibus maiores? Unde quidem dolores commodi recusandae eveniet dolorum accusantium non, quibusdam consequatur fugit laborum sit. Cum reprehenderit est ducimus repellendus laudantium. Quos, non rerum maxime nulla voluptatem amet! Eius reiciendis nemo incidunt, minima enim non.
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores labore eligendi repudiandae. In labore ex neque officiis fugit quidem tempore voluptas odit quisquam, error, nulla aut mollitia architecto voluptate.</p>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
