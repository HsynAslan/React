/* eslint-disable react/prop-types */

//rafc
function Courses({title, description, img}) {
    return(
        <div>
        <div><img src={img} alt="" /></div>
        <div>{title}</div>
        <div>{description}</div>
        </div>
    );
}
export default Courses
