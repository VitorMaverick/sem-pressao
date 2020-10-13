
import React, { useState, FormEvent, useContext, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Header  from "../../components/Header";
import Post, { Teacher } from "../../components/Post";
import "./styles.css";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import api_wp from "../../services/api_wp";
import { AuthContext } from "../../context/Auth";
import "../../assets/styles/global.css"
import reload from  "../../assets/images/reload.gif"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Link} from "react-router-dom"



function PostList()  {
  const [posts, setPosts] = useState([]);
  const [postSlider, setPostSlider] = useState([]);
  const [category, setCategory] = useState(0);

  useEffect(  () => {
    const fetchData = async () => {
      const response = await api_wp.get('posts?_embed');
      setPosts(response.data);
      setPostSlider(response.data);
      console.log(posts);
    }
    fetchData();
  } , [] )

  async function searchPosts(e){
    e.preventDefault();

    const response = await api_wp.get(`posts?categories=`+ category);
    setPosts(response.data);
  } 
   
  return (
    
    <div>
      <div className="post-thumbnail-index">
        {
                  postSlider.length?
                  //tamanho definido por post_thumbnail_size()
                  <Slider >
                  {postSlider.map((post, index) => {
                    return( 
                      <div key={index}
                      style={{ background: `url('${post._embedded['wp:featuredmedia'][0].source_url}') no-repeat center center` }}
                      >
                        <div className="center">
                          <Link to={`/single/${post.id}`} > {post.title.rendered} </Link>
                         
                            <div className="" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                          
                        </div>
                      
                      
                      </div>);
                      
                  })}
                  
                  </Slider>
                  :
                  
                  <img className="reload" src={reload} />
                  
              }
        </div>
        <Header />
      <div id="page-post-list" className="container">
        
        <div className="row">
          <div className="col-md-8">
            <main>
            <div className="index-title"><h1>Últimos Posts</h1></div>
          
            {posts.map((post, index) => {
              return( 
                
              <Post key= { post.id  } post={post} index={index}   />);
            })}
            </main>
          </div>
          <div className="col-md-4">
          <form onSubmit={searchPosts}>
            <Select 
              name="category" 
              label="Selecione uma categoria"
              value={category}
              onChange={(e) => { setCategory(e.target.value) }}
              options={[
                { value: 1, label: 'Slider'},
                { value: 3, label: 'Sem categoria'},
                
              ]}
            />
            <button type="submit">
              Buscar
            </button>
          </form>
          </div>
        </div>
        
        </div>
        
      </div>
    
  );
}

export default PostList;
