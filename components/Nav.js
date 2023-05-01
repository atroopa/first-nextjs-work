
import Link from 'next/link'

const Nav = () => {
  return (
        <ul className='text-2xl flex py-8 px-8 bg-gray-900' >
            <li className="mr-6">
                <Link className="text-gray-100 hover:text-gray-500" href="/">Home</Link>
            </li>
            <li className="mr-6">
                <Link className="text-gray-100 hover:text-gray-500" href="/about">About Us</Link>
            </li>
            <li className="mr-6">
                <Link className="text-gray-100 hover:text-gray-500" href="/contact">Contact</Link>
            </li>
        </ul>        
  )
}

export default Nav