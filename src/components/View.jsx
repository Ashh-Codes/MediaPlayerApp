import React, { useEffect, useState } from 'react'
import { Row,Col, AlertLink } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideosAPI, getSingleCategoryAPI, updatecategoryAPI, uploadVideoAPI } from '../services/allAPI'

const View = ({uploadVideoResponse,removevideoResponseFromCategory,setremoveCategoryVideoResponseFromView}) => {

  const [allVideos,setAllVideos] = useState([])

  const [deleteVideoResponse,setdeleteVideoResponse] = useState("")

  // component has only fn to showin browser but we need to call api result as well so we use useeffect
  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse,removevideoResponseFromCategory])

  const getAllVideos=async()=>{
    const result = await getAllVideosAPI()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
    
  }
console.log(allVideos);

const dragOverView=(e)=>{
  e.preventDefault()
}
const videoDropFromCategory=async(e)=>{
  const {categoryId,video} =JSON.parse(e.dataTransfer.getData("dataShare"))
console.log(`video dropped inside view component with video id :${video.id} from category id:${categoryId}`);
  //delete video from category
  const {data} = await getSingleCategoryAPI(categoryId)
  console.log(data);
  //update all videos after removing specific video from category
  const updatedCategoryVideoList = data?.allvideos?.filter(item=>item.id != video.id)
  console.log(updatedCategoryVideoList);
  const {id,categoryName} =data
  const response =await updatecategoryAPI(categoryId,{id,categoryName,allvideos:updatedCategoryVideoList})//here id and categoryname have same key value name so need as key and value,one is enough
  //share response to category component
  setremoveCategoryVideoResponseFromView(response)
  //add removed video to all videos api to showin view
  await uploadVideoAPI(video)
  getAllVideos()
  

}


  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>videoDropFromCategory(e)}>
      {
        allVideos.length>0 ?

        allVideos?.map(video=>(
        <Col key={video.id} className='mb-4' sm={12} md={6} lg={4}>
        <Videocard  setdeleteVideoResponse={setdeleteVideoResponse} displayData={video}/>
        </Col> 
        ))
        :
        <div className="fw-bolder text-danger">Nothing to display</div>
      }
        
    </Row>
    </>
  )
}

export default View
