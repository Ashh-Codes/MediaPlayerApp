import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addcategoryAPI, getcategoryAPI, getSingleVideoAPI, removecategoryAPI, updatecategoryAPI,removeVideoAPI } from '../services/allAPI';
import Videocard from './Videocard';




const Category = ({setremovevideoResponseFromCategory,removeCategoryVideoResponseFromView}) => {
   const [allCategory,setallCategory] = useState([])
  const [categoryName,setcategoryName] =useState("")

    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategory()
  },[removeCategoryVideoResponseFromView])

  const handleaddCategory =async()=>{
    if(categoryName){

      await addcategoryAPI({categoryName,allvideos:[]})
      setcategoryName("")
      handleClose()
      getAllCategory()


    }else{
      toast.warning("please fillthe form completely")
    }
  }

  const getAllCategory=async()=>{
     const result= await getcategoryAPI()
     if(result.status>=200 && result.status<300){
      setallCategory(result.data)
     }
  }
  console.log(allCategory);

  const removeCategory=async(categoryId)=>{
    await removecategoryAPI(categoryId)
    getAllCategory()
  }
  //to avoid unneccessary cancellation before droping of video
  const dragOverCategory =(e)=>{
    e.preventDefault()
  }
  const videoDropped=async(e,categoryId)=>{
    const videoId= e.dataTransfer.getData("vId")
    console.log(`video id:${videoId} dropped inside category id :${categoryId}`);

    //add video tocategory
      //destrucred to data object key data
    const {data} =await getSingleVideoAPI(videoId)
    console.log(data);
    let selectedCategory = allCategory?.find(item=>item.id==categoryId)
    console.log(selectedCategory);
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);
    await updatecategoryAPI(categoryId,selectedCategory)
     //but after this category details is not added to category in json file so we need api 
    const response = await removeVideoAPI(videoId)
    setremovevideoResponseFromCategory(response)
    getAllCategory()

  }
  const categoryVideoDragStart=(e,video,categoryId)=>{
    console.log(`dragged video id:${video.id} from category Id:${categoryId}`);
    let dataShare ={categoryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    
  }
  
  return (
    <>
    <div className="d-flex justify-content-around">
        <h5>All Category</h5>
        <button onClick={handleShow}  style={{width:'50px',height:'50px'}} className='btn btn-info rounded-circle fw-folder fs-5'>+</button>
    </div>
    <div className="container-fluid mt-3">
      {
        allCategory?.length>0?
        allCategory?.map(categoryDetails=>(
          <div droppable="true" onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,categoryDetails?.id)} key={categoryDetails?.id} className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between">
                <h5>{categoryDetails?.categoryName}</h5>
                <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger ms-5'></i></button>
            </div>
            <div className="row mt-2">
                {
                  categoryDetails?.allvideos?.length>0 &&
                    categoryDetails?.allvideos?.map(video=>(
                      <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,video,categoryDetails?.id)} key={video?.id} className="col-lg-4 mt-3">
                        <Videocard displayData={video} insideCategory={true}/>
                        {/* variable to hide delete in category */}
                      </div>
                    ))
                }
            </div>
        </div>
        ))
        :
        <div className="text-danger fw-bolder">
          No category added yet
        </div>

      }
       
    </div>
    <Modal centered show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cateofry Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInputName"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control  onChange={e=>setcategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleaddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Category
