import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";




const Blogs = ({handleAddToBookmarks,handleReadingTimes}) => {
    
    const [blogs, setBlogs] = useState([])
    // console.log(handleReadingTimes)
    useEffect(() => {
         fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    // const handleClick =(data)=>{
    //     const newValue = [...data, value]
    //     setValue(newValue)
    // }
    return (
        <div className="md:w-2/3 ">
          
           {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
           <div className="grid gap-10 md:grid-cols-2 ">
                {
                    blogs.map((blog, idx,) => <Blog key={`${blogs.id}-${idx}`} blog ={blog} handleAddToBookmarks={handleAddToBookmarks} handleReadingTimes={handleReadingTimes} ></Blog>)
                }
           </div>
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmarks:PropTypes.func,
    handleReadingTimes:PropTypes.func
   
}
export default Blogs;