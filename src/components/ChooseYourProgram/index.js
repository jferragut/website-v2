import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Button, Colors } from "../Styling";
import { Grid, Div } from "../Sections";
import { H4, H3, H2, Paragraph } from "../Heading";
import Icon from "../Icon";

const ChooseYourProgram = ({
  lang,
  programs,
  title,
  paragraph,
  chooseProgramRef,
  landingTemplate,
}) => {
  const data = useStaticQuery(graphql`
    {
      allChooseYourProgramYaml {
        edges {
          node {
            programs {
              title
              sub_title
              description
              description_mobile
              link
              icon
            }
            title
            paragraph
            fields {
              lang
            }
          }
        }
      }
    }
  `);
  let info = data.allChooseYourProgramYaml.edges.find(
    ({ node }) => node.fields.lang === lang
  );
  if (info) info = info.node;
  return (
    <Grid
      ref={chooseProgramRef}
      gridTemplateColumns_md={landingTemplate && "1fr repeat(12,1fr) 1fr"}
      gridTemplateColumns_tablet={
        landingTemplate ? "1fr repeat(12,1fr) 1fr" : "1fr repeat(12, 1fr) 1fr"
      }
      gridAutoRows_tablet="auto" //"minmax(100px, auto)"
      background={landingTemplate ? Colors.white : Colors.verylightGray}
      background_tablet={landingTemplate ? Colors.white : "transparent"}
      padding="59px 17px 83px 17px"
      padding_tablet=" 0 "
      margin="0 0 50px 0"
      margin_tablet="0 0 100px 0"
    >
      <Div
        margin_tablet="0"
        margin="0"
        padding_tablet="0 0 0 0"
        gridColumn_tablet="5 / 11"
        gridRow_tablet="1 / 2"
        flexDirection="column"
        width="100%"
      >
        <H2
          margin="0 0 10px 0"
          fontWeight="700"
          fontSize_tablet="30px"
          fontSize_xs="24px"
          lineHeight_tablet="36px"
          lineHeight_xs="28.8px"
        >
          {title || info.title}
        </H2>
        <Paragraph
          margin="10px 0"
          fontWeight="400"
          fontSize_tablet="21px"
          lineHeight="22px"
        >
          {paragraph || info.paragraph}
        </Paragraph>
      </Div>
      <Grid
        gridColumn_tablet="2 / 14"
        //gridRow_tablet="2 / 4"
        zIndex="1"
        gridTemplateColumns_tablet={
          landingTemplate ? "repeat(3, 4fr)" : "repeat(3, 4fr)"
        }
        gridRow_xs="1 / 3"
      >
        {Array.isArray(programs) &&
          programs.map((program, index) => {
            return (
              <Div
                key={index}
                display="flex"
                //height_xs="500px"
                // minHeight_tablet="285px"
                //padding={landingTemplate ? "1rem 2.5rem 1rem 2rem" : "1rem"}
                padding=" 24px 24px"
                border="3px solid black"
                flexDirection_tablet="column"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                alignItems_tablet="flex-end"
                background="#ffffff"
                style={{ position: "relative" }}
                flexWrap_sm="nowrap"
                flexWrap="wrap"
              >
                <Div
                  placeSelf_tablet={landingTemplate && "flex-start"}
                  display="flex"
                  justifyContent="space-between"
                  //alignSelf="center"
                  margin="10px 0 0 0"
                  margin_tablet="0"
                  //alignSelf_tablet="flex-end"
                  width="100%"
                  width_tablet="100%"
                >
                  <Div
                    display="inline"
                  >
                    <H4
                      textTransform="uppercase"
                      textAlign="left"
                      fontSize="15px"
                      lineHeight="19px"
                      letterSpacing="0.05em"
                      color={Colors.darkGray}
                      margin="0 0 5px 0"
                    >
                      {program.sub_title}
                    </H4>
                    {program.title.split("\n").map((title, index) => (
                      <Link key={index} to={program.link}>
                        <H3 textAlign="left" fontSize="22px" lineHeight="26px">
                          {title}
                        </H3>
                      </Link>
                    ))}
                  </Div>

                  <Icon
                    className="choose-your-program-icon"
                    icon={program.icon}
                    height="40px"
                    width="52px"
                    alignItems="end"
                  />
                </Div>
                <Div
                  display="flex"
                  flexDirection="column"
                  width="100%"
                  alignContent="flex-start"
                  margin="10px 0 0 0"
                  padding={landingTemplate ? "10px 0px 10px 0px" : "0 0 30px 15px"}
                >
                  {program.description &&
                    program.description.split("\n").map((paragraph, index) => (
                      <Paragraph
                        key={index}
                        letterSpacing="0.05em"
                        display_tablet="block"
                        display="none"
                        // lineHeight="22px"
                        textAlign="left"
                        fontSize="15px"
                        lineHeight="22px"
                        fontWeight="400"
                        opacity="1"
                        margin={index == 0 && "10px 0px 25px 0"}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}

                  {program.description_mobile && (
                    <Paragraph
                      letterSpacing="0.05em"
                      display="block"
                      display_tablet="none"
                      // lineHeight="22px"
                      textAlign="left"
                      fontSize="15px"
                      lineHeight="19px"
                      fontWeight="400"
                      opacity="1"
                      margin="10px 0px 25px 0"
                    >
                      {program.description_mobile}
                    </Paragraph>
                  )}
                </Div>
                {!program.comming_soon ? (
                  <Link to={program.link}>
                    {landingTemplate ? (
                      <Button
                        background={Colors.black}
                        colorHover={Colors.black}
                        color={Colors.white}
                        className="mobile"
                        style={{
                          position: "absolute",
                          bottom: "24px",
                          left: "24px",
                        }}
                      // backgroundColor="#000" width="184" height="40"
                      >
                        {program.text_link}
                      </Button>
                    ) : (
                      <Icon
                        className="mobile"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          right: "10px",
                        }}
                        icon="arrowright"
                        height="32px"
                        width="32px"
                      />
                    )}
                  </Link>
                ) : (
                  <Link to={program.link}>
                    <Button
                      variant="outline"
                      color="black"
                      font='"Lato", sans-serif'
                      width="fit-content"
                      pointer
                      textColor={Colors.black}
                      fontSize={"13px"}
                      borderRadius="3px"
                      padding="10px"
                    >
                      {program.text_link}
                    </Button>
                  </Link>
                )}
              </Div>
            );
          })}
      </Grid>
      <Div
        display="none"
        display_tablet="flex"
        padding_tablet="75px 0 0 0"
        background={Colors.verylightGray}
        zIndex="-1"
        gridColumn_tablet="1 / 15"
        gridRow_tablet="1 / 3"
        gridRow="1 / 4"
      />
    </Grid>
  );
};

export default ChooseYourProgram;