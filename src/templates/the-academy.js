import React from 'react';

import {Container, Column, Row, Wrapper, Divider} from '../components/Sections';
import {Title, H1, H2, H3, H4, Paragraph, Separator} from '../components/Heading'
import {Card} from '../components/Card'
import {Colors, Book, Teacher, Users, Sitemap, Button, RoundImage} from '../components/Styling'
import Mentors from '../components/Mentors'
import Events from '../components/Events'
import Credentials from '../components/Credentials'
import BaseRender from './_baseRender'

const Why = (props) => {
    const {data, pageContext, yml} = props;
    const cornerstone = yml.cornerstones[0];
    return (
        <>
            <Container fluid height="450px">
                <Row>
                    <Column size="1" />
                    <Column border="bottom" size="11" padding="10%" image="yes" url="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80" height="600px">
                        <Row>
                            <Column size="1" />
                            <Column size="8" align="center">
                                <H1 fontSize="50px" fontSizeXs="40px" color={Colors.white}>{yml.tagline}</H1>
                            </Column>
                        </Row>

                    </Column>
                </Row>
            </Container>
            <Divider height="100px" />
            <Container fluid >
                <Row>
                    <Column size="1" />
                    <Column size="11">
                        <Row>
                            <Column size="1" />
                            <Column size="9">
                                <Credentials up="80" />
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Container>
            <Divider height="100px" />
            <Wrapper
                style="default"
            >
                <Title
                    size="10"
                    title="4GEEKS OUTCOMES"
                    paragraph="out of our total students, 76% are looking to get a job right after and 24% are pursuing to improve their skills or launch startups"
                    primary
                    customParagraphSize="8"
                />
                <Divider height="20px" />
                <Row height="380px">
                    <RoundImage url="../images/program-charts.png" height="100%" width="100%" bsize="contain" />
                </Row>
            </Wrapper>
            <Divider height="100px" />
            <Wrapper style="default">
                <Title size="8" title={cornerstone.heading} primary />
            </Wrapper>
            <Divider height="150px" />
            <Wrapper
                style="default"
                image="no"
                color={Colors.lightGray}
                border="top"
            >
                <Row marginBottom="30px">
                    {cornerstone.cornerstones_list.map((item, index) => {
                        return (
                            <Column key={index} size="6" margin="0 0 10px 0">
                                <Card
                                    width="100%"
                                    height="200px"
                                    color="black"
                                    padding="30px"
                                    move="up"
                                    up="100px"
                                    marginXs="0 0 30px 0"
                                >
                                    <Row >
                                        <Column size="3">

                                            {item.icon === "Book" && <Book width="72px" color={Colors.yellow} fill={Colors.yellow} />}
                                            {item.icon === "Teacher" && <Teacher width="72px" color={Colors.yellow} fill={Colors.yellow} />}
                                            {item.icon === "Users" && <Users width="72px" color={Colors.yellow} fill={Colors.yellow} />}
                                            {item.icon === "Sitemap" && <Sitemap width="72px" color={Colors.yellow} fill={Colors.yellow} />}

                                        </Column>
                                        <Column size="8" >
                                            <Row><H4 color={Colors.white}>{item.title}</H4></Row>
                                            <Row marginTop="15px">
                                                <Paragraph fontSize="14px" lineHeight="18px">
                                                    {item.content}
                                                </Paragraph>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Card>
                            </Column>
                        )
                    })}

                </Row>
                <Divider height="50px" />
                <Title size="8" title="MEET THE TEAM" primary />
                <Divider height="150px" />
            </Wrapper>
            <Divider height="100px" />
            <Wrapper style="default">
                {/* <Mentors up="200px" /> */}
            </Wrapper>
            <Divider height="150px" />
            <Wrapper style="default" image="no" color={Colors.lightGray} border="top">
                <Row>
                    <Column
                        size="12"
                        border="bottom"
                        image="no"
                    >
                        <Card shadow borders="1.25rem" height="426px" move="up" up="50%">
                            <Row
                                height="100%"
                                marginLeft="0"
                                marginRight="0"
                                customRespSize
                            >
                                <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" image="no" border="bottom">
                                    <Row align="center" height="100%">
                                        <Column size="8" height="100%">
                                            <Divider height="50px" />
                                            <Row height="50px">
                                                <H2 primary align="left" >OUR STORY</H2>
                                            </Row>
                                            <Row>
                                                <Separator primary />
                                            </Row>
                                            <Row height="">
                                                <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="13px">4Geeks Academy was founded in 2015. What began as an internal project to train new developers has flourished into a full-time passion.</Paragraph>
                                            </Row>
                                            <Row height="">
                                                <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="13px">Today, 4Geeks is now based in the U.S. As coding has become an essential part of society, the mission of our Coding Bootcamp is to instill a new framework for Coding Education universally.</Paragraph>
                                            </Row>
                                            <Row height="">
                                                <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="13px">4Geeks Academy now offers locations in 3 cities, with 5 campuses, and over 300 graduates.</Paragraph>
                                            </Row>
                                            <Row>
                                                <Paragraph color={Colors.blue} margin="20px 0 0 0" align="left" fontSize="13px">Learn more about 4Geeks Academy ></Paragraph>
                                            </Row>

                                        </Column>
                                    </Row>
                                </Column>
                                <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" backgroundSize="cover" image="yes" url="../our-story.png" border="custom" customBorderRadius="0 1.25rem 1.25rem 0" />
                            </Row>
                        </Card>
                    </Column>
                </Row>
            </Wrapper>
            <Divider height="100px" />
            <Events />
            <Divider height="100px" />
        </>
    )
};

export const query = graphql`
  query AboutQuery($file_name: String!, $lang: String!) {
    allPageYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
            tagline
            basic_info{
                title
                description
                image
                keywords
            }
            cornerstones {
                cornerstones_list {
                  content
                  icon
                  title
                }
                heading
                sub_heading
              }
        }
      }
    }
  }
`;

export default BaseRender(Why);