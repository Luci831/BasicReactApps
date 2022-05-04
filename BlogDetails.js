import React from 'react';

const bDetails = [
    { cname: "React Learning", name: "Stephen Biz", message:"Welcome to learning React"},
    { cname: "Installation", name: "Schewzdenier", message:"You can install react from npm"},
];

export function BlogDetails() {
    return (
        <ul>
            {bDetails.map((item) =>
                <div>
                    <h2>{item.cname}</h2>
                    <h5>{item.name}</h5>
                    <p>{item.message}</p>
                </div>
            )}
            </ul>
            )
}