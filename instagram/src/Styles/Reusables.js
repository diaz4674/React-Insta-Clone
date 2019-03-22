import React from 'react';
import styled from 'styled-components';

const Poster = styled.span `
    font-weight: ${props => props.poster? 'bold' : 'normal'};
    color: '#4c5fd7';
    display: flex;
    align-items: center;
    padding-left: ${props => props.poster? '7px' : '0'}

`

export default Poster;