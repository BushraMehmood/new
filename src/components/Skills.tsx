import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-yellow-400 font-bold'>Technologies I Work with</h2>
                <p className='text-grey-500 pt-5'>I expertise in front-end development, I bring a comprehensive approach to creating web applications that are efficient, scalable, and visually engaging. My skill set includes TypeScript, React, Next.js, Tailwind CSS, and Node.js, empowering me to build responsive, high-performance solutions that prioritize both aesthetics and functionality.

</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-white-400 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>React.js</h2>
                        <h2>Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>Css</h2>
                        <h2>Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
