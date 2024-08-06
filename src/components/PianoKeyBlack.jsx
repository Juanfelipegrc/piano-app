import React from 'react'

export const PianoKeyBlack = ({note, playSound}) => {
  
    
    return (
        
        
        <div className='container-md'>
            {
                note != undefined?
                <div className='container'>
                <div 
                className='bg-black black-key'
                style={{
                    position: 'relative',
                    marginLeft: '8px',
                    width: '25px',
                    height: '100px',
                    color:'#fff',
                    zIndex:'100',
                    fontSize:'12px'

                    
                    }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        playSound(note);
                      }}
                >
                    {note}
                </div>
            </div>

            :
                <></>

            }
     
    </div>
    
  )
}
