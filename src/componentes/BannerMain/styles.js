import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height:80vh;
  color:var(--white);
  background-image:${({backgroundImage}) => `url(${backgroundImage})`};
  background-size:cover;
  background-position:center;
  

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:before {
    top: 0;
    height: 0%;
    background: rgba(0,0,0,0.5);
  }
  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 33%, transparent 100%);
    height: 20%;
  }
  

  @media(max-width:800px){
    height:auto;
    min-height:50vh;
  }
`;

export const ContentAreaContainer = styled.section`
    margin-left:5%;
    margin-right:5%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    

    @media(max-width:800px){
      padding-top:100px;
      flex-direction:column;
    }
`;

ContentAreaContainer.Item = styled.div`
    width:50%;
    margin-bottom:50px;

    @media(max-width:800px){
      width:100%;
    }
`;

ContentAreaContainer.Title = styled.h2`
    font-weight:300;
    font-size:40px;
    line-height:1;
    margin-top:0;
    margin-bottom:32px;

    @media(max-width:800px){
      font-size:32px;
      text-align:center;
    }
`;


ContentAreaContainer.Description = styled.p`
    @media(max-width:800px){
      display:none;
    }
`;


export const WatchButton = styled.button`
      cursor:pointer;
      padding:16px 24px;
      font-weight:bold;
      outline:none;
      border:0;
      border-radius:4px;
      background-color:var(--white);
      color:var(--black);
      font-size:16px;
      margin-left:auto;
      margin-right:auto;
      
      display:none;

      @media(max-width:800px){
        display:block;
      }    
      
`;