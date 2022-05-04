import React from 'react';

 const cDetails = [
    { name: "Angular", date:"4/5/2021" },
     { name: "React", date:"6/3/2021" },
 ];

export function CourseDetails() {
    return (
        < div>
            <ul>
                {cDetails.map((item) =>

                    <div>
                        <h2>{item.name}</h2>
                        <h3>{item.date}</h3>
                    </div>
                )}
            </ul>
        </div>
    )
}

