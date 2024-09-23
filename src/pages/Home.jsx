import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
  //otherwise we have to refresh everytimeto see the added video so we need to calltha allvideosapi fn everytime video is added.
  //so using statelifting and props property in home component to share to add and view component 
  const [uploadVideoResponse,setuploadVideoResponse] = useState("")
  const [removevideoResponseFromCategory,setremovevideoResponseFromCategory] = useState("")
  const [removeCategoryVideoResponseFromView,setremoveCategoryVideoResponseFromView] =useState("")

  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setuploadVideoResponse={setuploadVideoResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>

      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All videos</h3>
           <View uploadVideoResponse={uploadVideoResponse} removevideoResponseFromCategory={removevideoResponseFromCategory} setremoveCategoryVideoResponseFromView={setremoveCategoryVideoResponseFromView}/>
        </div>
        <div className="col-lg-6">
          <Category setremovevideoResponseFromCategory={setremovevideoResponseFromCategory} removeCategoryVideoResponseFromView={removeCategoryVideoResponseFromView}/>
        </div>
      </div>
    </div>
  )
}

export default Home

