import React from "react";

const BlogItem = ({post,className,index}) => {
    //console.log(post);
    const {title, body} = post;
    return (
        <div className = {className/* className = "BlogItem" */} key={index}> 
        <h3>{title}</h3>
        <p>{body}</p>

        </div>
    )
}

export {BlogItem};