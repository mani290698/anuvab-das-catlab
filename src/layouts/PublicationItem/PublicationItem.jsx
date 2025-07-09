import React from 'react';

const PublicationItem = ({ index, title, authors, journal, link, perspective, highlights }) => {
  return (
    <div className="mb-4 d-flex">
      <div style={{ width: '2.5rem' }} className="text-muted">
        {index})
      </div>
      <div>
        <div className="fw-bold">{title}</div>

        {/* Authors and journal */}
        <div>
          <span dangerouslySetInnerHTML={{ __html: authors }} />{' '}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <em>{journal}</em>
            </a>
          ) : (
            <em>{journal}</em>
          )}
        </div>

        {/* Perspective with HTML */}
        {perspective && (
          <div style={{ marginTop: '0.25rem' }}>
            <strong>Perspective:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: perspective }} />
          </div>
        )}

        {/* Highlights with HTML */}
        {highlights && (
          <div style={{ marginTop: '0.25rem' }}>
            <strong>Highlight{Array.isArray(highlights) && highlights.length > 1 ? 's' : ''}:</strong>{' '}
            {(Array.isArray(highlights) ? highlights : [highlights]).map((item, idx) => (
              <div key={idx}>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};


export default PublicationItem;
