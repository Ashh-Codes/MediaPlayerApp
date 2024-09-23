import commonAPI from "./commonApi";
import serverUrl  from "./url";

//upload video API must be called by Add component
 export const uploadVideoAPI =async(uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allvideos`,uploadVideo)
}

//to show vidoes in view component
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${serverUrl}/allvideos`,"")
}

//to store all videos in watch history called by videocard component

export const watchHistoryAPI =async(videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//to get all history videos from server to show in watch history page called by hostory component
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}

//remove  history using delete button fromhistory server
export const removeHistoryAPI = async(historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})//req body must be passed as empty object  for delete
}

//remove video from allvideos called by videocard component
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allvideos/${videoId}`,{})//req body must be passed as empty object  for delete
}

//add category api
export const addcategoryAPI =async(categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/category`,categoryDetails)
}

//get category api
export const getcategoryAPI = async()=>{
    return await commonAPI("GET",`${serverUrl}/category`,"")
}
//remove category api
export const removecategoryAPI = async(categoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}/category/${categoryId}`,{})//req body must be passed as empty object  for delete
}

//get video with particular id called by category component
export const getSingleVideoAPI = async(id)=>{
    return await commonAPI("GET",`${serverUrl}/allvideos/${id}`,"")
}

//updating category with video details so we use put
export const updatecategoryAPI =async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${serverUrl}/category/${categoryId}`,categoryDetails)}

//get single category api

export const getSingleCategoryAPI =async(id)=>{
    return await commonAPI("GET",`${serverUrl}/category/${id}`,"")
}