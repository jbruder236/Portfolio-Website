import React from 'react';

import background from "../background.png";


export default function Welcome(props) {

    return (
        <div style={{minHeight: '100vh', paddingTop: '10vh'}}>
            <p>
                Hey! My name is James and I'm a Senior Computer Science Engineering student at University of Connecticut.
                I will be looking for a software engineering job when I graduate in May 2023.
                I've worked with ...
                Some personal hobbies/interests are ...

                Technologies I've worked with:
                -React
                -C/C++

                Technologies I'm interested in pursuing further:
                -Python
                -ML/AI
            </p>
        </div>
    )
}