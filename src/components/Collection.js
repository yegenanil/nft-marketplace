import styled from "styled-components";
import img1 from "../assets/collectionimg1.png";
import img2 from "../assets/collectionimg2.png";
import img3 from "../assets/collectionimg3.png";
import img4 from "../assets/collectionimg4.png";
import img5 from "../assets/collectionimg5.png";
import img6 from "../assets/collectionimg6.png";
import img7 from "../assets/collectionimg7.png";
import img8 from "../assets/collectionimg8.png";
import avatar1 from "../assets/collectionellipse1.svg";
import avatar2 from "../assets/collectionellipse2.svg";
import avatar3 from "../assets/collectionellipse3.svg";
import avatar4 from "../assets/collectionellipse4.svg";
import avatar5 from "../assets/collectionellipse5.svg";
import avatar6 from "../assets/collectionellipse6.svg";
import avatar7 from "../assets/collectionellipse7.svg";
import avatar8 from "../assets/collectionellipse8.svg";

const CollectionContainer = styled.div`
background: linear-gradient(90.71deg, #e2f5ed 0%, #d1f3e4 100%);
width: 100%;
`;

const CollectionTitleGroup = styled.div`
display: flex;
justify-content: space-between;
`;

const CollectionTitle = styled.h3`
margin-left: 107px;
margin-top: 26px;
font-weight: 700;
font-size: 36px;
line-height: 52px;
color: #1F1D2B;
`;

const CollectionViewAll = styled.h1`
margin-top: 52px;
margin-right: 373px;
font-weight: 700;
font-size: 14px;
line-height: 20px;
cursor: pointer;
color: #5B68DF;
`;

const CollectionWrapperMainDiv = styled.div`
display: flex;
`;

const CollectionCardWrapper = styled.div`
width: 286px;
height: 367px;
border: 2px solid;
margin-left: 107px;
margin-top: 24px;
border-radius: 31.2016px;
overflow: hidden;
border-color: #5B68DF;
position: relative;
`;

const CollectionCardImg = styled.img`
`;

const CollectionOwnerGroupDiv = styled.div`
background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
border-bottom-left-radius: 17.8193px;
border-bottom-right-radius: 17.8193px;
width: 255px;
position: absolute;
top: 216px;
left: 14px;
height: 135px;
`;

const CollectionOwnerGroup = styled.div`
display: flex;
`;

const CollectionOwnerAvatar = styled.img`
margin-left: 14px;
margin-top: 13px;
margin-right: 4px;
`;

const CollectionOwnerTitleDiv = styled.div``;


const CollectionOwnerTitle = styled.h3`
font-size: 14px;
line-height: 20px;
color: #1F1D2B;
padding-top: 13px;
`;

const CollectionOwnerName = styled.h1`
font-size: 8.5px;
line-height: 14px;
color: #1F1D2B;
`;

const CollectionLine = styled.div`
border-bottom: 0.890966px solid #FFFFFF;
padding-top: 17px;
`;

const CollectionPriceTitle = styled.h3`
font-size: 10px;
line-height: 14px;
color: #1F1D2B;
padding-top: 13px;
padding-left: 14px;

`;

const CollectionPrice = styled.h1`
padding-left: 14px;
padding-top: 3px;
`;


const Collection = () => {
    return (
        <CollectionContainer>
            <CollectionTitleGroup>
                <CollectionTitle>Top collections</CollectionTitle>
                <CollectionViewAll>View all</CollectionViewAll>
            </CollectionTitleGroup>
            <CollectionWrapperMainDiv>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img1} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar1} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img2} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar2} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img3} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar3} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img4} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar4} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
            </CollectionWrapperMainDiv>
            <CollectionWrapperMainDiv>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img5} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar5} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img6} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar6} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img7} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar7} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
                <CollectionCardWrapper>
                    <CollectionCardImg src={img8} />
                    <CollectionOwnerGroupDiv>
                        <CollectionOwnerGroup>
                            <CollectionOwnerAvatar src={avatar8} />
                            <CollectionOwnerTitleDiv>
                                <CollectionOwnerTitle>World of Women Galaxy</CollectionOwnerTitle>
                                <CollectionOwnerName>By  Organization Woman</CollectionOwnerName>
                            </CollectionOwnerTitleDiv>
                        </CollectionOwnerGroup>
                        <CollectionLine />
                        <CollectionPriceTitle>Price</CollectionPriceTitle>
                        <CollectionPrice>0.218 ETH</CollectionPrice>
                    </CollectionOwnerGroupDiv>
                </CollectionCardWrapper>
            </CollectionWrapperMainDiv>
        </CollectionContainer>
    )
}

export default Collection