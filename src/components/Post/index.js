import React from "react";
import { Link } from "react-router-dom";
import Single from '../../pages/Single/'
import Moment from  "react-moment"

import "./styles.css";


const PostItem = ({ post, index }) => {
  return (
    <article id="blog-posts" class="artigo">
     
      <div class="card flex-row  h-md-250 wow bounceInUp" data-wow-duration="1.4s">
          <div class="post-thumbnail">
            {
                post._embedded?
                //tamanho definido por post_thumbnail_size()
                <img className="card-img-right d-flex d-none " src={post._embedded['wp:featuredmedia'][0].source_url}/>

                :
                
                <img class="card-img-right flex-auto d-none d-lg-block" src="https://i.picsum.photos/id/1/300/200.jpg?hmac=-NJkMeYPrdetftjjcJ9lbfAZcXVJhZy4rqGvbP0P8Hg" data-holder-rendered="true"/>
            }
            </div>    
                
            <div class="details text-center">
                <div class="content ">
                <p class="text-center">
                
                </p>
                </div>
            </div>
        
            <div class="card-body d-flex flex-column align-items-start">
            <Link  to={`/single/${post.id}`} > {post.title.rendered} </Link>
            <div class="meta text-muted">
                <a><Moment fromNow>{post.date}</Moment></a>
                
        
                
            </div>
            <div class="content card-content">
            <div className="content" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                
            
            </div>

        </div>


      </div>
    </article>    
      

      
  );
}

export default PostItem;
