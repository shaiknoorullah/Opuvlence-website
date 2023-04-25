import React from 'react'

const CustomButton = ({text,color}) => {
  return (
<div className='relative'>
<div className='font-black text-[1.4rem] spacing tracking-[1rem]'>{text}</div>
<div className="circle absolute bottom-[-25px] left-[-11px] "></div>

</div>   

    )
}

export default CustomButton