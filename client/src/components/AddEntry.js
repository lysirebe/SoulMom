import React, { Fragment, useState } from 'react';

const AddEntry = () => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault()
    try {

      const body = { title, entry };
      const response = await fetch("http://localhost:5000/dashboard/newEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error.message);
    }
  };


    return (
      <Fragment>
        <h1>SoulMom</h1>
        <h2>Add New Soul Entry</h2>
        <form onSubmit={onSubmitForm}>
          <label for="title">Give your entry a title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <br />

          <label for="entry">Write to your hearts content </label>
          <input
            type="text"
            name="entry"
            value={entry}
            onChange = {e =>setEntry(e.target.value)}
          />

          <br />
        
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  };

export default AddEntry;