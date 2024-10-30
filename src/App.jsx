// import PropTypes from 'prop-types'
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'


function App() {
const [bookmark, setBookmark] = useState([])
const [readingTimes, setReadingTimes] = useState(0)
  // console.log(bookmarks)
  const handleAddToBookmarks = blog =>{
    // console.log(blog)
    // console.log('add to bookmarks')
    const newBookmark = [...bookmark,blog]
    setBookmark(newBookmark)
  }
  const handleReadingTimes = (id,time) =>{
    const newReadingTime = readingTimes + time;
    setReadingTimes(newReadingTime)
    const remainingBookmarks = bookmark.filter(bookmark => bookmark.id !==id)
    setBookmark(remainingBookmarks)
  }
 

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto my-10'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTimes ={handleReadingTimes} ></Blogs>
          <Bookmarks bookmark ={bookmark} readingTimes={readingTimes}></Bookmarks>
      </div>
    </>
  )
}
// handleBookmarks.propTypes={
//   blog:PropTypes.function.isRequired
// }
export default App
