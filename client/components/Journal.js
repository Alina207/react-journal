import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Main display page for all journal entries

import EntryCard from './EntryCard';

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedEntries: false,
      entries: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then((entries) => {
        if (!Array.isArray(entries)) entries = [];
        return this.setState({
          entries,
          fetchedEntries: true
        });
      })
      .catch(err => console.log('Journal.componentDidMount: get entries: ERROR ', err));
  }
  
  render() {
    if (!this.state.fetchedEntries) return (
      <><p>Loading journal entries, please wait...</p></>
    );

    const { entries } = this.state;

    if (!entries.length) return (
      <><p>Sorry, no journal entries found.</p></>
    );

    const entryEl = entries.map((entry, i) => {
      return (
        <EntryCard
          key={i}
          info={entry}     
        />
      );
    });

    return (
      <section className="mainSection">
        {/* <Link to={'/createEntry'}>
          <button
            type="button"
            className="btnSecondary"
          >
            Create Journal Entry
          </button>
        </Link> */}
      <div className="entryContainer">
      <article className="addCard card entryCard"></article>
        {entryEl}
      </div>
    </section>
    );
  }
}
 export default Journal;