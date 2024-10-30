import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
// import { CiBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks, handleReadingTimes}) => {
    // console.log(handleReadingTimes)
    const {id, title, cover,author_img, posted_date,author,reading_time,hashtags} = blog
    // console.log(blog)
    return (
        <div className=" border-2 p-3 shadow-xl rounded-lg mb-4 bg-lime-50">
            <img className="w-full rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center my-4">
                <div className="flex gap-5">
                    <img className="w-8 md:w-14" src={author_img} alt="" />
                    <div className="">
                        <h4 className="text-lg md:text-2xl font-bold">{author}</h4>
                        <p className="text-xs md:text-base font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-base md:text-xl font-medium">{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className="text-xl"><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2> 
            <p className="">
                {
                    hashtags.map((hash, idx )=> <span className="pr-4 text-sm md:text-base" key={idx}><a  href="">#{hash}</a></span>)
                }
            </p>
            <button className="text-purple-400 font-normal underline my-5 " onClick={()=>handleReadingTimes(id, reading_time)}>Mark As Read</button>

        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func,
    handleReadingTimes:PropTypes.func
   
}
export default Blog;


// {
//     "id": 1,
//     "cover": "https://i.ibb.co/84Zfw2n/1.jpg",
//     "title": "Top 10 ES6 Features You Must Know",
//     "author_img": "https://i.ibb.co/VvLNdLL/boy1.png",
//     "author": "Hamza Sohail",
//     "posted_date": "September 15, 2023",
//     "reading_time": 5,
//     "hashtags": [
//         "beginners",
//         "es6"
//     ]
// }