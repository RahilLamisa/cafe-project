
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'


function App() {
  

  return (
    <>
      
      <Navbar></Navbar>
      

      <div className='main-container flex gap-3'>
        <div className='left w-[70%] p-2 bg-amber-50'>
          <Blogs>
            
          </Blogs>
        </div>
        <div className='right w-[30%]  text-center bg-slate-200'>
          <h2 font-bold text-2xl>Reading time : 0</h2>
          <h2 font-bold text-2xl>Bookmark : 0</h2>
        </div>
      </div>
      
    </>
  )
}

export default App
