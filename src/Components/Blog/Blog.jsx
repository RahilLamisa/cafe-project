import React from 'react';

const Blog = ({blog}) => {

    // const {coverImage} =blog;

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
        blog.hashtag.map(hash => <p>{hash}</p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;