// src/publication/Publication.js
import "../publication/publication.css";

function Publication({ image, title, author, journal,date, articleLink }) {
  return (
    <div className="research-tile">
      {image && (
        <img
          src={image}
          alt={title}
          className="tile-image"
        />
      )}

      <h3 className="tile-title" style={{marginTop:"10px"}}>{title}</h3>

      <p className="tile-authors" style={{marginTop:"30px"}}>
        <i className="fas fa-user" style={{marginRight:"20px"}}></i> {author}
      </p>

      <p className="tile-journal" style={{marginTop:"20px"}}>
        <i className="fas fa-book" style={{marginRight:"20px"}}></i>
        <span dangerouslySetInnerHTML={{ __html: journal }} ></span>
      </p>

      <p className="tile-date" style={{marginTop:"20px"}}>
        <i className="fas fa-calendar-alt" style={{marginRight:"20px"}}></i>
        <a href={articleLink} target="_blank"  rel="noopener noreferrer"><span> <strong>{date}</strong></span></a>
      </p>

    </div>
  );
}

export default Publication;
