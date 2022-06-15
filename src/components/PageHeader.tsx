import React from 'react'
import hero from '../assets/hero.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


type PageHeaderProps = {
    title: string;
};

const PageHeader = ({title}: PageHeaderProps) => {
    return (
        <Title>
            <h1>{title}</h1>
        </Title>
    );

}

export default PageHeader

const Title = styled.div`

    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    h1 {
        font: normal 4em 'Playfair Display SC', serif;
        text-align:center;
    }

    padding-top: 10px;

`;