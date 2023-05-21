import React from 'react';

function Slider({data,index,setIndex}) {

    

    const handle = (e) => {
        e.preventDefault()
        
    }
    
    const prev = () => {
        if(index > 0) {
            setIndex(index-1)
          
        }else {
            setIndex(data.length-1)
        }
    }

    const next = () => {
        if(index < data.length-1) { 
            setIndex(index+1)
        }else {
            setIndex(0)
        }
    }

   

  return (
    <>
        <div className='total_slider_div'>
        <a href={`#${index}`}>
            <div 
                className="button" 
                onClick={prev}
            >
                {"<"}
            </div>
        </a>
            <div className='slider'>
            <div className='slider_img_container' >
                {
                    data.map((item,idx) => {
                        return (
                                <img 
                                    src={item} alt="" 
                                    id={idx}
                                    onClick={()=>{setIndex(idx)}}
                                    style={ index === idx ? {border : "10px solid blue"} : {}}
                                    
                                    
                                />
                            
                        )
                    })
                }
                </div>
            </div>
            <a href={`#${index}`}>
            <div 
                className="button"
                onClick={next}
                
            >
                {">"}
            </div>
            </a>
        
        </div>
        <div className='for_slideshow'>
            <input type="checkbox" id="slideshow" name="slideshow" onChange={handle}/>
            <label htmlFor="slideshow">Slideshow</label>            
        </div>
    </>
    
    
  )
}

export default Slider;
