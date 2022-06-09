import React from 'react';

const EntryCard = (props) => {
  const { title, body } = props;
  
  return (
    <div className="card" >
    {
      title &&  
      <div className="card-header">{title}</div>
    }
    {
      desc &&
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>
    }
  </div>
  );
}

export default EntryCard;

// <article className="card entryCard">
// {
//   title &&
//   <div className="entryHeadContainer">
//     <h3 className="entryName">Title: {title}</h3>
//   </div>
// }
// {
//   body &&
// <div className="cardBody">
//   <ul className="entryDetailsList">
//     <li className="entryDetail">Body: {body}</li>
//   </ul>
//   </div>
// }
// <div className="entryCardFooter">
//   <p>Date</p>
// </div>
// </article>