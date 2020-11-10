import styled from 'styled-components'
import heroImage from '../images/under_construction.svg'

const Hero = styled.img.attrs({
    src: `${heroImage}`
})`
    margin-top: 4.25rem;
    padding: 0 6.25%;
    width: 100%;
`

export default Hero