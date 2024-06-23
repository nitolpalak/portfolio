import React from 'react'
import Image from 'next/image'

const img_src = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
const personal_details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                            Proin rutrum sem metus, in accumsan diam gravida vitae. Etiam elementum sollicitudin tempor. \
                            Vivamus blandit metus venenatis, condimentum felis a, malesuada ligula. \
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                            Proin rutrum sem metus, in accumsan diam gravida vitae. Etiam elementum sollicitudin tempor. \
                            Vivamus blandit metus venenatis, condimentum felis a, malesuada ligula. \
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
                            Proin rutrum sem metus, in accumsan diam gravida vitae. Etiam elementum sollicitudin tempor. \
                            Vivamus blandit metus venenatis, condimentum felis a, malesuada ligula. \
                            Curabitur cursus elit vitae varius porttitor. "
const AboutMe = () => {
  return (
    <div className="p-10 flex items-center">
        <Image 
            src= {img_src}
            alt="Description of Image" 
            width={600}
            height={600}
            className="flex rounded-full p-12 border-x-4 border-blue-500" 
        />
        <main className="flex min-h-screen items-center justify-center">
        <div className='p-12 '>
            <div className='inline-block text-4xl border-y-4 px-3'>Mir Niaz Ahmed</div>
            <div className='text-xl border-b-2'>A bit about me</div>
            <p>{personal_details}</p>
        </div>
        </main>
    </div>
  )
}

export default AboutMe


