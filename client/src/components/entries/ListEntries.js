import React, { Fragment, useEffect, useState } from "react";

const ListEntries = () => {
    const [entries, setEntries] = useState([]);

    const getEntries = async () => {
        try {
            const response = await fetch("http://localhost:5000/dashboard/entries");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            setEntries(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEntries();
    }, []);

    console.log(entries);

    return (
        <Fragment>
            <h1>My soul entries</h1>
            <div className="entries-container">
                {entries.map(entry => (
                    <div key={entry.id} className="entry-card">
                        <h2>{entry.title}</h2>
                        <p>{entry.entry}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default ListEntries;

