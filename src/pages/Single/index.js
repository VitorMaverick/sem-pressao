import React, { useState, FormEvent, useContext, useEffect } from "react";
import Header  from "../../components/Header";
import axios from "axios";
import api_wp from "../../services/api_wp";
import SingleC from "../../components/SingleComponent"
import reload from  "../../assets/images/reload.gif"


const Single= (props) => {

  const [post, setPost] = useState({});
  const [media, setMedia] = useState({});
  const id = props.match.params.id;

  useEffect(  () => {
    const fetchData = () => {
       api_wp.get(`posts/${id}`)
      .then((response)=>{
        setPost(response.data);
         api_wp.get(`media/${response.data.featured_media}`)
        .then((res)=>{
            setMedia(res.data)
        })
      })
      
      
      
      console.log(post);
    }
    fetchData();
    const fetchData1 = async () => {
        
        
        console.log(post);
      }
      fetchData1();
    
  } , [] )

    return(
        <div>
            <Header /> 
            {media.guid?
              <SingleC post={post} media={media}/>
            :<img src={reload}/>}
            
        </div>
    )
	
}

export default Single;