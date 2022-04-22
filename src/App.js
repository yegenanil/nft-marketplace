import styled from "styled-components";
import Topbar from "./components/Topbar";
import bgImg from "./assets/main-img.png";

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
    width: 100vw;
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

function App() {
  return (
    <MainContainer>
      <Topbar />
      <Sections>
        <Bgimg src={bgImg} />
        <span>to be continued</span>
      </Sections>
    </MainContainer>
  );
}

export default App;
