import React,{useState} from 'react'
import { Card, CardText,Modal} from 'react-bootstrap'
import { removeVideoAPI, watchHistoryAPI } from '../services/allAPI';

const Videocard = ({displayData,setdeleteVideoResponse,insideCategory}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = async() => {
    setShow(true);
    //need to save history  in server as well so call api to store
    //we need caption time and link in watch history page in browser
    const {caption,link} = displayData
    const systTime =new Date()//on clicking ofmodal date of system will be called
    const timestmp = systTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timestmp);
    //json on stores object so convert videodetails to object here key value is same so one is enough
    const videoDetails ={caption,link,timestmp}
    await watchHistoryAPI(videoDetails)
    
  }
  const removeVideo=async(videoId)=>{
      const result= await removeVideoAPI(videoId)
      console.log(result);
      setdeleteVideoResponse(result?.data)
      
      //pass response to view component that video is deleted and show rest of videos 
      //use state lifting to share data ,create state in view component which is parentof videocard
  }

  const videoDragStart=(e,videoId)=>{
    console.log(`dragging video with id:${videoId}`);
    e.dataTransfer.setData("vId",videoId)
    
  }
  return (
    <>
    <Card draggable="true" onDragStart={e=>videoDragStart(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url} />
      <Card.Body>
        <CardText className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>

            {
              !insideCategory &&
               <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

            }
        </CardText>
           </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <iframe width="100%" height="300" src={`${displayData?.link}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard
