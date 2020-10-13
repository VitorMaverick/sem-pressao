import React, { useState, FormEvent, useContext, useEffect } from "react";
import './styles.css';




const SingleComponent = ({ post, media }) => {



    return (
        
            <article id="post">

                <div class="post-thumbnail-single">
                   
                        <div>

                            <img className="img-fluid" src={media.guid.rendered} />

                        </div>
                        
                    <div class="container">
                        <div class="row justify-content-center single-title">
                            <div class="col-md-9"></div>
                           
                                <div className="single-title">
                                    <h1 > {post.title.rendered} </h1>
                                </div>
                               
                        </div>
                    </div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-9 mt-4 mb-4">
                                <div class="content">
                                        
                                            <div className="single-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>              
                                      </div>
                            </div>
                        </div>

                    </div>
                
                </div>
            </article>
    )
	
}

export default SingleComponent;