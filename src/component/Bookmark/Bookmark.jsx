
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark;
    return (
        <div className="shadow-xl p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-medium">{title}</h4>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;