import React from 'react'

function Form() {
  return (
    <>
      <form action="">
        <div className="d-flex mt-3 pt-3">
            <div className="flex-grow-1">
                <input type="text" placeholder='Name' className='form-control'/>
            </div>
            <div className="flex-grow-2 ms-3">
                <input type="text" placeholder='Email' className='form-control'/>
            </div>
        </div>

        <div className="d-flex mt-3">
            <div className="flex-grow-1">
                <input type="text" placeholder='Phone (Optional)' className='form-control'/>
            </div>
            <div className="flex-grow-2 ms-3">
                <input type="text" placeholder='Subject' className='form-control'/>
            </div>
        </div>

        <textarea name="" id="" cols="30" rows="10" className='form-control mt-3' placeholder='Enter your message here'></textarea>
        <div className="mt-3">
            <button className="btn btn-danger">Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form
