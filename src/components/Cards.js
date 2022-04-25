import styled from "styled-components";
import card1icon from "../assets/card1icon.svg";
import card1img from "../assets/cardimg1.png";
import card2img from "../assets/cardimg2.png";
import card2icon from "../assets/card2icon.svg";
import card3img from "../assets/cardimg3.png";
import card3icon from "../assets/card3icon.svg";
import verifiedicon from "../assets/verifiedIcon.svg";

const CardsContainer = styled.div`
background: linear-gradient(90.71deg, #e2f5ed 0%, #d1f3e4 100%);
width: 100%;
`;

const CardsTitleGroup = styled.div`
display: flex;
justify-content: space-between;
`;

const CardsTitle = styled.h3`
margin-left: 107px;
margin-top: 56px;
font-weight: 700;
font-size: 36px;
line-height: 52px;
color: #1F1D2B;
`;

const CardsViewAll = styled.h1`
margin-top: 72px;
margin-right: 373px;
font-weight: 700;
font-size: 14px;
line-height: 20px;
cursor: pointer;
color: #5B68DF;
`;

const CardsWrapperMainDiv = styled.div`
display: flex;
`;

const CardsWrapperDiv = styled.div`
width: 321px;
height: 525px;
border: 2px solid; 
border-radius: 35.0246px;
border-color: #5B68DF;
margin: 24px 125px 0 107px;
justify-content: center;
`;

const CardsImgGroup = styled.div`
position: relative;
`;

const CardsImg = styled.img` 
 width: 287px;
 height: 287px;
 margin-top: 11px;
 margin-left: 17px;
`;

const CardsIcon = styled.img`
position: absolute;
bottom: -25px;
left: 133px;
width: 54px;
height: 54px;
`;

const CardsTitleWrapper = styled.div`
display: flex;
margin-top: 51px;
margin-left: 73px;
align-items: center;
`;

const CardsTitleDescription = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 23px;
color: #1F1D2B;
`;

const CardsTitleIcon = styled.img`
width: 23px;
height: 23px;
margin-left: 8px;
`;

const CardsOwners = styled.h1`
font-weight: 350;
font-size: 12px;
line-height: 20px;
margin-left: 87px;
`;

const CardsDescription = styled.p`
display: flex;
align-items: center;
font-size: 11px;
line-height: 20px;
text-align: justify;
color: #1F1D2B;
padding: 12px 17px 21px 17px;
`;

const Cards = () => {
    return (
        <CardsContainer>
            <CardsTitleGroup>
                <CardsTitle>Hidden Gems</CardsTitle>
                <CardsViewAll>View All</CardsViewAll>
            </CardsTitleGroup>
            <CardsWrapperMainDiv>
                <CardsWrapperDiv>
                    <CardsImgGroup>
                        <CardsImg src={card1img} />
                        <CardsIcon src={card1icon} />
                    </CardsImgGroup>
                    <CardsTitleWrapper>
                        <CardsTitleDescription>ZombieClub Token</CardsTitleDescription>
                        <CardsTitleIcon src={verifiedicon} />
                    </CardsTitleWrapper>
                    <CardsOwners>Created by ZombieLab</CardsOwners>
                    <CardsDescription>
                        Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is unique and resides
                        on the Ethereum blockchain. Your Zombie Lab Club NFT will double as your club membership.
                    </CardsDescription>
                </CardsWrapperDiv>
                <CardsWrapperDiv>
                    <CardsImgGroup>
                        <CardsImg src={card2img} />
                        <CardsIcon src={card2icon} />
                    </CardsImgGroup>
                    <CardsTitleWrapper>
                        <CardsTitleDescription>Meta Bounty Hunters</CardsTitleDescription>
                        <CardsTitleIcon src={verifiedicon} />
                    </CardsTitleWrapper>
                    <CardsOwners>Created by B30898</CardsOwners>
                    <CardsDescription>
                        Meta Bounty Hunters is a first of its kind  community and collective of elite members who
                        share a community-first mindset and are focused on giving back to its NFT holders through the Reflection Rewards.
                    </CardsDescription>
                </CardsWrapperDiv>
                <CardsWrapperDiv>
                    <CardsImgGroup>
                        <CardsImg src={card3img} />
                        <CardsIcon src={card3icon} />
                    </CardsImgGroup>
                    <CardsTitleWrapper>
                        <CardsTitleDescription>Treeverse Plots</CardsTitleDescription>
                        <CardsTitleIcon src={verifiedicon} />
                    </CardsTitleWrapper>
                    <CardsOwners>Created by Treeverse_Wallet</CardsOwners>
                    <CardsDescription>
                        Treeverse is an open-world, fantasy MMORPG with a MOBA-style combat system.
                        Slay beasts, forge mighty weapons, lure the biggest fish, form guilds, defeat dungeons
                    </CardsDescription>
                </CardsWrapperDiv>
            </CardsWrapperMainDiv>
        </CardsContainer>
    )
}

export default Cards