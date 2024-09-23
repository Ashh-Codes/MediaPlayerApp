import React from 'react'
import { useState } from 'react'
import { Button,Modal ,Form,FloatingLabel} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';


const Add = ({setuploadVideoResponse}) => {


    const [invalidyoutubeLink,setinvalidYoutubeLink] = useState(false)
    const [videoDetails,setvideoDetails] = useState({
        caption:"",
        url:"",
        link:""
    })
    console.log(videoDetails);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbeddUrl =(link)=>{
        if(link.includes("v=")){
            let videoId = link.split("v=")[1].slice(0,11)
            console.log(videoId)
            
            //embed code is common in youtube redirect link and embed link of that url(src from embed code of video)
            // src =https://www.youtube.com/embed/GxJMuSAYZrE
            //https://www.youtube.com/watch?v=GxJMuSAYZrE

            setvideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
            setinvalidYoutubeLink(false)
            
        }
        else{
            setinvalidYoutubeLink(true)
            console.log("invalid url")
            setvideoDetails({...videoDetails,link:""})
            
        }
    }
    const handleUpload=async()=>{
      console.log("inside handle upload fn");
      const {caption,link,url} =videoDetails
      if(caption && link&& url){
        const result = await uploadVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          handleClose()
          setvideoDetails({...videoDetails,caption:"",url:"",link:""})
          toast.success(`${result.data.caption} added to your collection`)
          //if upload is success 
          setuploadVideoResponse(result)
        }
        
      }else{
        toast.warning("please fillform correctly")
      }
      
    }
  return (
    <>
   <div className="d-flex align-items-center">
   <h5>Upload new video</h5>
   <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>{setvideoDetails({...videoDetails,caption:e.target.value})}} type="text" placeholder="Video Caption" />
            {/* spread operator(...) */}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Youtube video link"
        className="mb-3"
      >
        <Form.Control onChange={e=>getEmbeddUrl(e.target.value)} type="text" placeholder="Youtube video link" />
      </FloatingLabel>
      {
        invalidyoutubeLink&&
        <div className="text-danger fw-bolder mt-3">
          Invalid Youtube Link
        </div>
      }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>


    </>
  )
}

export default Add
