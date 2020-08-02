import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color:var(--white);
  min-height:197px;
  margin-left:5%;
  margin-bottom:40px;
  margin-top:50px;
`;


export const Title = styled.h3`
  font-size:28px;
  line-height:1;
  font-weight:normal;
  padding:15px 20px;
  display:inline-block;
  border-radius:4px;
  margin-bottom:16px;

  @media(max-width:800px){
   font-size:18px;
   padding:10px; 
  }
`;

export const ExtraLink = styled.a`
  margin-left:16px;
  text-decoration:none;
  transition: opacity .3s;

  &:hover,
  &:focus{
    opacity: .5;
  }

  @media(max-width:800px){
   display:block;
   margin:0;
   margin-bottom:16px; 
  }
`;

export const VideoCardList = styled.ul`
  list-style:none;
  padding-left:0;
  margin:0;
  display:flex;
  flex-direction:row;
  overflow-x:auto;

  li{
    margin-right:16px;
  }
`;

