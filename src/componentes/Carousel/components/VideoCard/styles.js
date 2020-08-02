import styled from 'styled-components';

export const VideoCardContainer = styled.a`
    height:175px;
    width:298px;
    transition: all 0.3s ease 0s;
    
    border:2px solid ;
    border-radius:10px;
    display:inline-block;

    background-image:${({url}) => `url(${url})`};
    background-size:cover;
    background-position:center;

    &:last-child{
    margin-right: 10px;
   }

  &:hover,
  &:focus{
    opacity: 0.7;
    transform: scale(1.1,1.1);
    margin: 0 20px;
    /* border:none; */
  }

`;
