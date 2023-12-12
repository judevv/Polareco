import React from "react";
import styled from "styled-components";
import { PiStarFourFill } from "react-icons/pi";
import MyMissions from "../components/feature/user/missions/MyMissions/MyMissions";
import TodayMissions from "../components/feature/user/missions/TodayMissions/TodayMissions";
import Button from "../components/atoms/Button";

function HabitPage () {
    return (
        <Container>
            <ContentsContiner>
                <Title>
                    <PiStarFourFill style={{color: '#D3F169'}}/>
                    <p>Stamps of Week!</p>
                    <StatusButton>스탬프 현황</StatusButton>
                </Title>
                
            </ContentsContiner>
            <ContentsContiner>
                <Title>
                    <PiStarFourFill style={{color: '#D3F169'}}/>
                    나만의 미션
                </Title>
                <MyMissions />
            </ContentsContiner>
            <ContentsContiner>
                <Title>
                    <PiStarFourFill style={{color: '#D3F169'}}/>
                    오늘의 미션
                </Title>
                <TodayMissions />
            </ContentsContiner>
        </Container>
    )

};

export default HabitPage;

const Container = styled.section`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid red; // 임시
    padding: 30px 120px;
`;

const ContentsContiner = styled.div`
    border: 1px solid blue; // 임시
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    display: flex;
    flex-direction: row;
    gap: 14px;
`;

const StatusButton = styled(Button)`
    width: auto;
    height: auto;
    padding: 0px 20px;
    color: #fff;
    background-color: black;
`;