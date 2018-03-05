import React from 'react';

const About = ({match}) => {
    return <div>{match.params.name}</div>
}

export default About;