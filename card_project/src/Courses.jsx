/* eslint-disable react/prop-types */

//rafc
function Courses({title, description, img}) {
    return(    
        <div className="card column">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={img}
              alt="İmage"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
           
            <div className="media-content">
              <p className="title is-4">{title}</p>
              
            </div>
          </div>
      
          <div className="content">
        {description}
            <br />
            
          </div>
        </div>
      </div>
    );
}
export default Courses
