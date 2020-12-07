import React, {useState} from 'react';

import {Button} from '../index';
import {
    StarIcon,
    CarIcon,
    CircleIcon,
    DashedIcon,
    MapsIcon,
    MessageIcon,
    PhoneIcon,
} from '../../assets/icons';
import {
    Container,
    AddressInformation,
    BubbleButton,
    CarRequest,
    Column,
    DescriptionItems,
    Header,
    Label,
    Line,
    Location,
    LocationWrapper,
    Name,
    Rating,
    Row,
    Subtitle,
    Thumbnail,
    Wrapper,
} from './styles';

import global from '../../global';
import {FORMAT_PRICE} from '../../utils/format-price';

const Card = ({
                  thumbnail,
                  name,
                  rating,
                  address,
                  location,
                  distance,
                  time,
              }) => (
    <Container style={{...global.boxShadow}}>
        <Header>
            <Row>
                <Thumbnail source={thumbnail}/>
                <Column>
                    <Name>{name}</Name>
                    <Row>
                        <StarIcon/>
                        <Rating>{rating}</Rating>
                    </Row>
                </Column>
            </Row>
            <Row>
                <BubbleButton type="message" last={false}>
                    <MessageIcon/>
                </BubbleButton>

                <BubbleButton type="phone" last={true}>
                    <PhoneIcon/>
                </BubbleButton>
            </Row>
        </Header>
        <Wrapper>
            <AddressInformation>
                <LocationWrapper>
                    <CircleIcon/>
                    <Location>{address}</Location>
                </LocationWrapper>

                <LocationWrapper>
                    <DashedIcon/>
                    <Line/>
                </LocationWrapper>

                <LocationWrapper>
                    <MapsIcon/>
                    <Location>{location}</Location>
                </LocationWrapper>
            </AddressInformation>

            <CarRequest>
                <CarIcon/>
                <DescriptionItems>
                    <Subtitle>distance</Subtitle>
                    <Label>{distance + ' km'}</Label>
                </DescriptionItems>

                <DescriptionItems>
                    <Subtitle>time</Subtitle>
                    <Label>{time + ' min'}</Label>
                </DescriptionItems>

                <DescriptionItems>
                    <Subtitle>price</Subtitle>
                    <Label>{FORMAT_PRICE(distance * 2)}</Label>
                </DescriptionItems>
            </CarRequest>

            <Button>Cancel Request</Button>
        </Wrapper>
    </Container>
);
export default Card;
