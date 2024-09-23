import React from 'react'
import { Button,Modal ,Form,FloatingLabel} from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container  mt-5 w-100'>
        <div className="d-flex row justify-content-center">
           <div className="col-md-5">
            <h5>Introduction</h5>
            <p className='mt-4'>Media player  app is to store videos that you want to save according to your taste and categorries accordings for best experience and easy access.</p>

           </div>
           <div className="col-md-2"> <h5>Links</h5>
           <div className='d-flex flex-column justify-content-center'>
           <a className='text-decoration-none text-white' href="">Home</a>
           <a className='text-decoration-none text-white' href="">Category</a>
           <a className='text-decoration-none text-white' href="">History</a>
           <a className='text-decoration-none text-white' href="">Playlist</a>
           </div>
           </div>
           <div className="col-md-2"> <h5>Guids</h5>
           <div className='d-flex flex-column justify-content-center'>
           <a className='text-decoration-none text-white' href="">React</a>
           <a className='text-decoration-none text-white' href="">React Bootstrap</a>
           <a className='text-decoration-none text-white' href="">Router</a>
           </div>
           </div>
           <div className="col-md-3"><h5>Contact Us</h5>
           <div className='d-flex'>
           <FloatingLabel 
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <button style={{height:'55px'}} className='btn btn-info ms-3'><i class="fa-solid fa-arrow-right"></i></button>

           </div>
           <div className='d-flex justify-content-between'>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-instagram"></i>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-linkedin"></i>
           <i class="fa-brands fa-github"></i>
           </div>
           </div>
           
        </div>

        <div className='text-center mt-5'>copyright @copy;  May 2024 @reg; Media player</div>
      
    </div>
  )
}

export default Footer
