import React from 'react';

const EntryCard = ({
  info
}) => {
  const { title, body } = info;
  
  return (
    <article className="card entryCard">
      <div className="entryHeadContainer">
        <h3 className="entryName">Title: {title}</h3>
      </div>
      <ul className="entryDetailsList">
        <li className="entryDetail">Body: {body}</li>
      </ul>
    </article>
  );
}

export default EntryCard;