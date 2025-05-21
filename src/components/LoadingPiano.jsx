import React from 'react'


export const LoadingPiano = ({onStart, isInitialized}) => {



    
  return (


    !isInitialized
    &&  <div
    className='w-100 h-100 p-0 m-0 d-flex justify-content-center align-items-center container-loading-piano'

    >

        <button onClick={onStart} className='btn btn-success btn-lg'>
            <h1>Start playing</h1>
        </button>


    </div>



   
  )
}
