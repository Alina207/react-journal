import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Main display page for all journal entries

import EntryCard from './EntryCard';

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fetchedEntries: false,
      entries: [
        {
          title: "Title 0",
          body: "Body 0"
        }
      ]
    }
  }

  addCard = () => {
    const entries = this.state.entries
    entries.push({
      title: "Title 10",
      body: "Body 10"
    })
    this.setState({ entries });
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api')
  //     .then(res => res.json())
  //     .then((entries) => {
  //       if (!Array.isArray(entries)) entries = [];
  //       return this.setState({
  //         entries,
  //         fetchedEntries: true
  //       });
  //     })
  //     .catch(err => console.log('Journal.componentDidMount: get entries: ERROR ', err));
  // }
  
  render() {
    // if (!this.state.fetchedEntries) return (
    //   <><p>Loading journal entries, please wait...</p></>
    // );

    const { entries } = this.state;

    // if (!entries.length) return (
    //   <><p>Sorry, no journal entries found.</p></>
    // );

    // const entryEl = entries.map((entry, i) => {
    //   return (
    //     <EntryCard
    //       key={i}
    //       info={entry}     
    //     />
    //   );
    // });

    return (
      <section className="mainSection">
        <div className="entryContainer">
        <article className="addCard card entryCard" onClick={this.addCard}>
          <svg viewBox="0 0 24 24" className="plus">
            <path d="M 12 2 L 12 22 M 2 12 L 22 12" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          </svg>
        </article>
          {entries.map((entry, i) => {
            return (
              <EntryCard
                key={i}
                title={entry.title}
                body={entry.body}    
              />
              )
            })
          }
        </div>
      </section> 
    )
  }
}
 export default Journal;

 

{/* 
return (
<section className="mainSection">
<div className="entryContainer">
<article className="addCard card entryCard" onClick={this.addCard}>
  <svg viewBox="0 0 24 24" className="plus">
    <path d="M 12 2 L 12 22 M 2 12 L 22 12" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
  </svg>
</article>
  {entryEl}
  </div>
</section> 
);
*/}