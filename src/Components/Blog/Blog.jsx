import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    // console.log(handleBookmark);


    return (
        <div>
            
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.coverImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
    <h2 className="text-[16px] font-semibold">{blog.title}</h2>
    <div className='flex gap-2 justify-center items-center'>
        <img src={blog.authorImage} className='w-8 rounded-full' />
        <p>{blog.authorName}</p>
    </div>
    <div className='flex justify-between'>
    {
        blog.hashtag.map((hash, i) => <p key={i}>{hash}</p>)
    }
    </div>
    <div className="card-actions justify-end items-center">
      <button onClick={()=>handleMarkAsRead(blog.readingTime)} className="btn btn-primary">Mark as read</button>
      <FaBookmark onClick={() => handleBookmark(blog)} size={25} />

    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;