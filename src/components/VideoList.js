import React from 'react';
import {Grid} from '@material-ui/core' 
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect})=>{
  
    return(
        <Grid spacing={10}>
            {
            videos.map((video, id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)    
            }
        </Grid>
       
    )
}

export default VideoList;