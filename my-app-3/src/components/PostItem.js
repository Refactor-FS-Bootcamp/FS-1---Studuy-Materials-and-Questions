import React from 'react'
import './PostItem.css'
import styled from 'styled-components';

const h1Styled = {
    backgroundColor: 'yellow',
    padding: '5px'
}

const ParaStyled = styled.p`
    font-size: 1em;
    text-align: center;
    color: darkmagenta;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'pink', textTransform: 'uppercase' }}>Title: {post.title}</h3>
            <ParaStyled>{post.body}</ParaStyled>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem