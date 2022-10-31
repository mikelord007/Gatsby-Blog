import React from 'react'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span class="text-sm text-gray-500 sm:text-center">© 2022 <Link to="#" class="hover:underline">GatsbyBlog™</Link>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
            <li>
                <Link to="/blogs" class="mr-4 hover:underline md:mr-6 ">Blogs</Link>
            </li>
            <li>
                <Link to="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" class="mr-4 hover:underline md:mr-6">Licensing</Link>
            </li>
            <li>
                <Link to="#" class="hover:underline">Contact</Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer