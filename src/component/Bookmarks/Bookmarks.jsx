import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmark,readingTimes}) => {
    // console.log(bookmark)
   

    return (
        <div className="md:w-1/3 ml-5">
           <div className=" bg-lime-100 p-4">
                <h2 className="text-center p-3 bg-orange-50 text-xl rounded-sm mb-3 shadow-2xl font-bold">Spent time on read: {readingTimes}</h2>
                <h2 className="text-center p-3 bg-orange-50 text-xl rounded-sm mb-3 shadow-2xl font-bold">Bookmarked Blogs: {bookmark.length}</h2>
          
                {
                    bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
             </div>
        </div>
    ); 
};
Bookmarks.propTypes={
    bookmark:PropTypes.array,
    readingTimes:PropTypes.func
}
export default Bookmarks;