import React from 'react';

function Viewer({data,index}) {
  return (
    <div className='viewer'>
      {
        <img src={data[index]} alt="" />
      }
    </div>
  )
}

export default Viewer
