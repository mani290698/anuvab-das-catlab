import React from 'react';

const PublicationItem = ({ index, title, authors, journal, link, perspective, highlights,extra }) => {
  return (
    <div className="mb-4 d-flex">
      <div  style={{ width: '2.5rem', flexShrink: 0 }}className="text-muted">
        {index})
      </div>
      <div>
        <div className="fw-bold"  style={{ wordWrap: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}><span dangerouslySetInnerHTML={{ __html: title }} />{' '}</div>

        {/* Authors and journal */}
        <div>
          <span dangerouslySetInnerHTML={{ __html: authors }} />{' '}
          <span
  dangerouslySetInnerHTML={{
    __html: link
      ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-decoration-none">${journal}</a>`
      : `<em>${journal}</em>`,
  }}
/>
        </div>

        {/* Perspective with HTML */}
        {perspective && (
          <div style={{ marginTop: '0.25rem' }}>
            <strong>Perspective:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: perspective }} />
          </div>
        )}

        {extra && (
          <div style={{ marginTop: '0.25rem' }}>
            <strong> <span dangerouslySetInnerHTML={{ __html: extra }} /></strong>{' '}
           
          </div>
        )}

        {/* Highlights with HTML */}
        {highlights && (
          <div style={{ marginTop: '0.25rem' }}>
            {(Array.isArray(highlights) ? highlights : [highlights]).map((item, idx) => (
              <div key={idx}>
                <strong>Highlight:</strong>&nbsp;
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
