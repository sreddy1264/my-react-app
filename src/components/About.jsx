import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate();
return(<div>
    This is about me
    <p onClick={() => navigate('/home')}>Click me</p>
    </div>)
};

export default About;