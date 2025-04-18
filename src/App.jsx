
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'


function App() {

  const [bookmark, setBookmark] = useState([]);
  const [read, setRead] = useState(0)
  
  const handleBookmark =(blog) =>{
    // console.log(blog);
    setBookmark([...bookmark, blog]);
  }
  
  const handleMarkAsRead = (time, id) => {
    // console.log(time);
    const newRead = parseInt(read);
    const newtime = parseInt(time);
    const newTime = newRead + newtime;
    setRead(newTime)
    handleRemoveFromBookmark(id)
  }

  // console.log(read);

  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmark.filter(mark => mark.id!==id)
    // console.log(remainingBookmark);
    setBookmark(remainingBookmark)
  }

  return (
    <>
      
      <Navbar></Navbar>
      

      <div className='main-container flex gap-3'>
        <div className='left w-[70%] p-2 bg-amber-50'>
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}>            
          </Blogs>
        </div>
        <div className='right w-[30%]  text-center bg-slate-200'>
          <h2 className='font-bold text-2xl'>Reading time : {read}</h2>
          <h2 className='font-bold text-2xl'>Bookmark : {bookmark.length}</h2>
          {
            bookmark.map((mark,i)=> <p key={i} className='bg-amber-100 p-2 m-2'>{mark.title}</p>)
          }
        </div>
      </div>
      
    </>
  )
}

export default App
