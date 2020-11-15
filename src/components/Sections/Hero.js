import React, { useEffect } from 'react';
import { useTransitionControl } from '../../hooks';

import { StyledHeroSection } from './Hero.styled';


const Hero = () => {
    const [state, enter, exit] = useTransitionControl();
    
    const defaultStyle = {
        transition: 'opacity 1500ms ease-in-out',
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 1},
        entered: { opacity: 1},
        exiting: { opacity: 0},
        exited: { opacity: 0},
    }
    
    const style = {
        ...defaultStyle,
        ...transitionStyles[state] ?? {},
    }

    useEffect(() => {
        enter();
    }, [])


    const one = <h3>Hi, my name is</h3>;
    const two = <h1>Jackson Chen.</h1>;


    return (
        <StyledHeroSection onClick={enter}>
            <h3 style={style}>Hi, my name is</h3>
        </StyledHeroSection>
    )
}

export default Hero;