import React from 'react'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className='text-white'>
      <p className='text-lg'>Give me an image.</p>
      <div className='flex flex-row w-full justify-center items-center'>
        <div className='p-4 rounded-md shadow-lg w-1/2 flex items-center justify-center'>
          <input className='w-3/4 p-2 text-black' type="text" placeholder='URL' onChange={onInputChange}/>
          <button className='w-1/4 px-3 py-2 bg-teal-400' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm