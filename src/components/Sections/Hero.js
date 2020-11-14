import React from 'react';

import { StyledHeroSection } from './Hero.styled';

import heroImage from '../../images/under_construction.svg';

const Hero = () => {
    return (
        <StyledHeroSection>
            <img src={heroImage} alt="under construction" />
        </StyledHeroSection>
    )
}

export default Hero;