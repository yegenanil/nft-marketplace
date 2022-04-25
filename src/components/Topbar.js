import styled from "styled-components";
import logo from "../assets/logo.svg";
import searchicon from "../assets/searchIcon.svg";
import walleticon from "../assets/walletIcon.svg";

const TopbarContainer = styled.div`
  width: 100%;
  height: 96px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(45px);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #1f1d2b;
    margin-left: 97px;
    margin-right: 40px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #7be1b4;
    }
`;

const TopbarLogo = styled.img`
  width: 37px;
  height: 37px;
  margin: 30px 97px 30px 107px;
`;

const TopbarSearchGroup = styled.div`
  position: relative;  
  }
`;

const TopbarSearchIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 33px;
`;

const TopbarInput = styled.input`
  width: 378px;
  min-height: 42px;
  border-radius: 90px;
  padding-left: 81px;
  background: transparent;
  border-style: none;
  border: 1px solid;
  border-color: #7be1b4;
  padding-right: 25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 275;
    font-size: 12px;
    line-height: 17px;
    color: #1f1d2b;
  }
`;

const TopbarAccountButton = styled.button`
  width: 106px;
  height: 32px;
  border-radius: 90px;
  background: transparent;
  border-style: none;
  border: 1px solid;
  border-color: #7be1b4;
  color: #7be1b4;
  font-weight: 600;
  cursor: pointer;
  margin-left: 40px;
`;

const TopbarWalletGroup = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;  
`;

const TopbarWalletIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 54px;
`;

const TopbarWalletButton = styled.button`
  width: 183px;
  height: 32px;
  border-style: none;
  margin-left: 40px;
  background: linear-gradient(90.71deg, #73e0a9 0%, #5b68df 100%);
  border-radius: 90px;
  color: #fff;
  padding: 6px 24px 6px 44px;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLogo src={logo} alt="logo" />
      <TopbarSearchGroup>
        <TopbarSearchIcon src={searchicon} alt="search" />
        <TopbarInput
          type="text"
          placeholder="Search items, collections, and accounts"
        />
      </TopbarSearchGroup>
      <span>Explore</span>
      <span>Activity</span>
      <span>Resources</span>
      <TopbarAccountButton>Account</TopbarAccountButton>
      <TopbarWalletGroup>
        <TopbarWalletIcon src={walleticon} />
        <TopbarWalletButton>Connect Wallet</TopbarWalletButton>
      </TopbarWalletGroup>
    </TopbarContainer>
  );
};

export default Topbar;
