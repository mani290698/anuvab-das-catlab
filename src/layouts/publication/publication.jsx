// src/publication/Publication.js
import "../publication/publication.css";

function Publication({ image, title, author, journal }) {
  return (
    <div className="research-tile">
      <img
        src={image}
        alt={title}
        className="tile-image"
      />

      <h3 className="tile-title">{title}</h3>

      <p className="tile-authors">
        <i className="fas fa-user"></i> {author}
      </p>

      <p className="tile-journal">
        <i className="fas fa-book"></i>
        <span> <strong>{journal}</strong></span>
      </p>
    </div>
  );
}

export default Publication;
