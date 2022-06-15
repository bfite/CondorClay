import React from 'react'
import hero from '../assets/hero.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <Wrapper className='section-center'> 
            <article className='content'>
                <HeroWords />
                <ShopNowButton />
            </article>
            <HeroImage />
        </Wrapper>
    )
}

export default Hero

const HeroWords = () => {
    return (
        <>
            <h1>
                Condor Clay <br />
                Handmade for You
            </h1>
            <p>
                High-quality hand-crafted Polymer Clay Earrings
            </p>
        </>
    )
}

const ShopNowButton = () => {
    return (
        <Link to='/products'>
            Shop Now
        </Link>
    )
}

const HeroImage = () => {
    return (
        <article>
            <img src={hero} alt='hero' className='main-img' />
        </article>
    )
}
 
const Wrapper = styled.section`
    min-height: 60vh;
    display: grid;
    place-items: center;
    background: white;
    .img-container {
        display: none;
    }

    p {
        line-height: 2;
        max-width: 45em;
        margin-bottom: 1rem;
        color: black;
        font-size: 1rem;
    }
    @media (min-width: 992px) {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        h1 {
            margin-bottom: 2rem;
            color: black;
        }
        p {
            font-size: 1.25rem;
        }
        .img-container {
            display: block;
            position: relative;
        }
        .main-img {
            width: 100%;
            height: 550px;
            position: relative;
            border-radius: var(--radius);
            display: block;
            object-fit: cover;
        }
        
    }
`
