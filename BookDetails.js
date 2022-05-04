import React from 'react';

const bookDetails = [
    { id: 101, name: "Master React", price:670 },
    { id: 102, name: "Deep Dive into Angular 11", price: 800 },
    { id: 103, name: "Mongo Essentials", price:450},
];

export function BookDetails() {
    return (
        <ul>
            {bookDetails.map((item) =>
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                   
                </div>
            )}
        </ul>
    )
}