import styled from "styled-components";
import Topbar from "./components/Topbar";
import bgImg from "./assets/main-img.png";
import playicon from "./assets/playIcon.svg";
import Cards from "./components/Cards";
import Collection from "./components/Collection";

const MainContainer = styled.div`
  background: linear-gradient(90.71deg, #e2f5ed 0%, #d1f3e4 100%);
  height: 100vh;
`;

const Sections = styled.div`
  width: 100%;
  height: calc(100vh - 96px);
  position: relative;
  top: 96px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //for firefox
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 99.1vw;
    height: calc(100vh - 96px);
    scroll-snap-align: start;
  }
`;

const Bgimg = styled.img`
  position: absolute;
  width: 750px;
  height: 750px;
  right: 0;
  top: -96px;
  z-index: 0;
`;

const MainPageDescriptionDiv = styled.div`
padding-left: 103px;
padding-top: 220px;
position: relative;
`;

const MainPageTitle = styled.h1`
font-weight: 700;
font-size: 14px;
line-height: 20px;
color: #1F1D2B;
opacity: 0.5;
`;

const MainPageDescription = styled.p`
font-weight: 700;
font-size: 36px;
line-height: 52px;
color: #1F1D2B;
padding-top: 16px;
padding-bottom: 64px;
`;

const MainPageButtonExplore = styled.button`
font-weight: 700;
font-size: 20px;
line-height: 29px;
padding: 13px 64px;
border-radius: 90px;
background: transparent;
border-style: none;
border: 2px solid;
border-color: #5B68DF;
color: #5B68DF;
margin-right: 24px;
cursor: pointer;
`;

const MainPageButtonCreate = styled.button`
font-weight: 700;
font-size: 20px;
line-height: 29px;
padding: 13px 64px;
border-radius: 90px;
background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
border-style: none;
color: #ffffff;
margin-right: 24px;
cursor: pointer;
`;

const MainPageVideoGroup = styled.div`
display: flex;
align-items: center;
padding-top: 156px;
`;

const MainPageVideoIcon = styled.img`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  `;

const MainPageVideoDescription = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 20px;
color: #1F1D2B;
`;

function App() {
  return (
    <MainContainer>
      <Topbar />
      <Sections>
        <Bgimg src={bgImg} />
        <MainPageDescriptionDiv>
          <MainPageTitle>Exclusive NFT for Digital and Real-world Assets</MainPageTitle>
          <MainPageDescription>The world's first non-fungible token (NFT) marketplace <br />
            for both digital and physical assets.</MainPageDescription>
          <MainPageButtonExplore>Explore </MainPageButtonExplore>
          <MainPageButtonCreate>Create</MainPageButtonCreate>
          <MainPageVideoGroup>
            <MainPageVideoIcon src={playicon} />
            <MainPageVideoDescription>Learn more about TheFund</MainPageVideoDescription>
          </MainPageVideoGroup>
        </MainPageDescriptionDiv>

        <Cards />

        <Collection />
        
      </Sections>
    </MainContainer>
  );
}

export default App;
