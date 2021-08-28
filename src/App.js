import './App.css';
import React, {useState, useEffect} from 'react'
import {Grid, Typography } from '@material-ui/core'
//import youtube from '.api/youtube'
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';
const App = ()=>{
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  /*state={
    video:[],
    selectedVideo:null,
  }

  componentDidMount(){
    this.handlesubmit('react js tutorials')
  }

  onVideoSelect =(video)=>{
    this.setState({selectedVideo:video});
  }*/

  useEffect(()=>{
    handleSubmit('javascript tutorials');
  }, [])

  const handleSubmit= async(searchTerm)=>{
    /*const response= await youtube.get('search', {
      params:{
      part:'snippet',
      maxResults:5,
      key:'AIzaSyB8n-pzfvAa1jA91wPJlHWBF3s8BBf1tWM',
      q:searchTerm,
  }});
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})*/
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          // TODO - add a new API key.
          key: 'AIzaSyB8n-pzfvAa1jA91wPJlHWBF3s8BBf1tWM',
          q: searchTerm,
        }
      });
  
      setVideos(videos);
      setSelectedVideo(videos[0]);
    } 

   //const {selectedVideo, videos} = this.state;
  return (
    <Grid style={{justifyContent:"center"}} container spacing={10}>
      <Grid item xs={12}>
          <Grid container spacing={10}>
              <Grid item xs={12} >
               <SearchBar onFormSubmit={handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                  <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                 <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
              </Grid>
          </Grid>
      </Grid>
    </Grid>

  );
 

}

export default App;
