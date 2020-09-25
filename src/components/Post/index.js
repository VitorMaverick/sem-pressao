import React from "react";

import "./styles.css";


const PostaItem = ({ post }) => {
  return (
        
    <div class="card flex-lg-row  h-md-250 wow bounceInUp" data-wow-duration="1.4s">
        <div class="post-thumbnail">
         {
            post.thumbnail?
            //tamanho definido por post_thumbnail_size()
            <div className=" card-img-right d-flex d-none ">{post.thumbnail}</div>

            :
            
            <img class="card-img-right flex-auto d-none d-lg-block" src="https://i.picsum.photos/id/1039/6945/4635.jpg?hmac=tdgHDygif2JPCTFMM7KcuOAbwEU11aucKJ8eWcGD9_Q" data-holder-rendered="true"/>
         }
        </div>    
            
        <div class="details text-center">
            <div class="content ">
            <p class="text-center">
            <a href="http://twitter.com/intent/tweet?text=" title={post.title.rendered} target="_blank"><i class="fa fa-twitter"></i></a>
            </p>
            </div>
        </div>
    
        <div class="card-body d-flex flex-column align-items-start">
        <h3 class="mb-0"><a href="<?php the_permalink(); ?>">post.title.rendered</a></h3>
        <div class="meta text-muted mb-1">
            <p class="">Publicado por {post.author}</p>
            <a href="DATA">post.date</a>
    
            
        </div>
        <div class="content card-content">
            <p class="card-text mb-auto"> {post.content.rendered}</p>
            <a href="LINK PARA PAGINA UNICA COM ID" title="Twittar sobre <?php the_title();?>" target="_blank"><i class="fa fa-twitter"></i></a>
        </div>

    </div>


  </div>

      

      
  );
}

export default PostItem;
