import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="w-5 h-5 bg-green-300 rounded-full p-2 m-3"></div>
        <a className="btn btn-ghost text-3xl p-2">Mir Niaz Ahmed</a>
        <a className="pt-3 pl-3 text-sm">Software Engineer</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a className='border-r mr-2'>Resume</a></li>
          <li><a className='border-r mr-2'>Research</a></li>
          <li><a className='border-r mr-2'>Personal</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar