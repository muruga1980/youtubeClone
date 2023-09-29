import React, { useState ,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {Videos} from './'
import { fetchAPI } from '../utils/fetchAPI';


const VideoDetails = () => {

const [videoDetail, setVideoDetail]= useState('');
const [videos, setVideos] = useState([])

// const {
//   snippet: { title, channelId, channelTitle },
//   statistics: { viewCount, likeCount },
// } = videoDetail

const {id} =useParams()

useEffect(()=>{
  fetchAPI(`videos?part=snippet.statistics&id=${id}`)
  .then((data)=> setVideoDetail(data.items[0]))

  fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  .then((data) => setVideos(data.items))
  



},[id])

if(!videoDetail.snippet) return 'Loading....'


  return (
    <>

    
    <div className='row'>
        <div className='col-md-8'>
          <ReactPlayer width="1000px" height="540px" url={` https://www.youtube.com/watch?v=${id} `} controls  />

      <h4 className='pt-2'>{videoDetail.snippet.title}</h4>


 
      
       <div className='d-flex justify-content-start g-5'>
       <Link to={`/channel/${videoDetail.snippet.channelId}`} className='text-decoration-none'>
       <p className='text-secondary text-secondary bg-light p-2 px-4 rounded-pill'>{videoDetail.snippet.channelTitle}</p> 
       </Link>
       <p className='text-secondary bg-light p-2 px-4  rounded-pill '> <span className='bi bi-eye'> </span>{parseInt( videoDetail.statistics.viewCount).toLocaleString()} Views </p> 
       <p className='text-secondary bg-light p-2 px-4  rounded-pill'><i class="bi bi-hand-thumbs-up"></i> {parseInt( videoDetail.statistics.likeCount).toLocaleString()} Liks </p> 
       </div>        
 

   
        </div>

        <div className='col-md-4'>      
     
      <div style={{height:'650px',overflow:'auto'}}>
         <Videos videos = {videos} className="pb-3"/>
         </div>

      </div>

    </div>
    </>
  )
}

export default VideoDetails