import React from 'react'
import Image from 'next/image';

interface propsType{
    title:string;
    disc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({title,disc,img,tags}) => {
  return (
    <div className='w-[300px]vsm:w-[350px]'>
      <div>
        <Image className=' w-[300px]vsm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}/>
      </div>
      
       <div className='p-4 space-y-4'>
        <div className='text-4xl font-bold'>{title}</div>
        <div>{disc}</div>
        <div>
          {tags.map((el) => (
            <div className='tags'key={(el)}>
              {el}

            </div>))}
        </div>
       </div>
    </div>
  )
}

export default Card
