import React, { useState, useEffect } from 'react';

import StyledHeroSection from './Hero.styled';


const Hero = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setState(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const first = <h3>Hi, my name is</h3>;
    const second = <h1>Jackson.</h1>;
    const third = <p>I'm a full-stack web developer.</p>

    const items = [first, second, third];

    const renderItems = items.map((item, index) => (
        <div key={index}>
            {item}
        </div>
    ))

    return (
        <StyledHeroSection animate={state}>
            {renderItems}
        </StyledHeroSection>
    )
}

export default Hero;