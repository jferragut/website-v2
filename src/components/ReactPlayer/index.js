import React, { useEffect } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
import { Devices } from "../Responsive";
import Modal from "../Modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideoWrapper = styled.section`
  position: relative;
  width: ${(props) => props.width || "640px"};
  height: ${(props) => props.height || "auto"};
  margin: auto;
  @media ${Devices.xxs} {
  }
  @media ${Devices.xs} {
  }
  @media ${Devices.sm} {
  }
  @media ${Devices.tablet} {
    margin: ${(props) => props.margin_tablet || "30px 10%"};
    width: ${(props) => props.width_tablet};
    height: ${(props) => props.height_tablet};
  }
  @media ${Devices.md} {
    width: ${(props) => props.width_md};
    height: ${(props) => props.height_md};
  }
  @media ${Devices.lg} {
  }
  @media ${Devices.xl} {
  }
  @media ${Devices.xxl} {
  }
`;

const Iframe = styled(YouTube)`
  padding: 0;
  border-radius: ${(props) => props.borderRadius || "auto"};
  height: ${(props) => props.height || "100%"};
`;

const Thumbnail = styled.img`
  display: block;
  object-fit: cover;
`;

const Image = styled.div`
  position: relative;
  margin: auto;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "100%"};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius || "1.25rem"};
  @media ${Devices.xxs} {
  }
  @media ${Devices.xs} {
  }
  @media ${Devices.sm} {
  }
  @media ${Devices.tablet} {
    width: ${(props) => props.width_tablet};
    height: ${(props) => props.height_tablet};
  }
  @media ${Devices.md} {
    width: ${(props) => props.width_md};
    height: ${(props) => props.height_md};
  }
  @media ${Devices.lg} {
  }
  @media ${Devices.xl} {
  }
  @media ${Devices.xxl} {
  }
`;

const Player = ({
  id,
  onPlay,
  onPause,
  onEnd,
  onError,
  onStateChange,
  onPlaybackRateChange,
  onPlaybackQualityChange,
  imageSize,
  playerVars,
  noCookies,
  width,
  style,
  className,
  thumb,
  image_thumb,
  left_tablet,
  right_tablet,
  With_Modal,
  imageWidth,
  imageWidth_tablet,
  imageHeight,
  videoHeight,
  switched,
  width_play,
  height_play,
  fontSize_play,
  background_play,
  opacity_play,
  transformPlay,
  transformPlay_tablet,
  transformPlay_md,
  transformPlay_lg,
  leftPlay_tablet,
  margin_tablet,

  ...rest
}) => {
  const [showVideo, setShowVideo] = React.useState(false);
  const [vid, setVid] = React.useState({});

  function yt_parser(url) {
    let regExpUrl =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExpUrl);
    return match && match[7].length == 11 ? match[7] : url;
  }

  const validImageSizes = [
    "default",
    "hqdefault",
    "mqdefault",
    "sddefault",
    "maxresdefault",
  ];

  const image = () =>
    validImageSizes.includes(imageSize) ? imageSize : "default";

  // With_Modal

  useEffect(() => {
    if (vid.pauseVideo) {
      vid.pauseVideo();
    }
  }, [switched]);

  const imgStyles = image_thumb?.style ? JSON.parse(image_thumb?.style) : null;
  return (
    <VideoWrapper {...rest} style={style} margin_tablet={margin_tablet}>
      {showVideo ? (
        <>
          {With_Modal ? (
            <Modal
              boxPadding="80px 5%"
              open={showVideo}
              onClose={() => setShowVideo(false)}
            >
              <Iframe
                borderRadius={style.borderRadius}
                videoId={yt_parser(id)}
                id={`a-${id} do-not-delete-this-hack`}
                // onReady={e => e.target.playVideo()}
                onReady={(e) => setVid(e.target)}
                onPlay={onPlay}
                onPause={onPause}
                onEnd={onEnd}
                onError={onError}
                onStateChange={onStateChange}
                onPlaybackRateChange={onPlaybackRateChange}
                onPlaybackQualityChange={onPlaybackQualityChange}
                height="375px"
                opts={{
                  // padding: "125px 0 0",
                  width: "100%",
                  height: "675px",
                  host: noCookies
                    ? "https://www.youtube-nocookie.com"
                    : "https://www.youtube.com",
                  ...playerVars,
                }}
              />
            </Modal>
          ) : (
            <Iframe
              borderRadius={style.borderRadius}
              videoId={yt_parser(id)}
              id={`a-${id} do-not-delete-this-hack`}
              // onReady={(e) => e.target.pauseVideo()}
              onReady={(e) => setVid(e.target)}
              onPlay={onPlay}
              onPause={onPause}
              onEnd={onEnd}
              onError={onError}
              onStateChange={onStateChange}
              onPlaybackRateChange={onPlaybackRateChange}
              onPlaybackQualityChange={onPlaybackQualityChange}
              height={videoHeight}
              opts={{
                width: "100%",
                height: `${style.height}`,
                host: noCookies
                  ? "https://www.youtube-nocookie.com"
                  : "https://www.youtube.com",
                ...playerVars,
              }}
            />
          )}
        </>
      ) : (
        <Image
          width={imageWidth}
          width_tablet={imageWidth_tablet || "100%"}
          borderRadius="3px"
          height={imageHeight || "100%"}
          position="relative"
          boxShadow={image_thumb?.shadow && "20px 15px 0px 0px rgba(0,0,0,1)"}
          //border={image_thumb?.shadow && "3px solid black"}
          style={imgStyles && { ...JSON.parse(image_thumb?.style) }}
        >
          {id && (
            <Play
              onClick={() => setShowVideo(true)}
              right_tablet={right_tablet}
              left_tablet={left_tablet}
              aria-label="Play Video"
              width={width_play}
              height={height_play}
              background={background_play}
              fontSize={fontSize_play}
              opacity={opacity_play}
              margin_tablet={margin_tablet}
              leftPlay_tablet={leftPlay_tablet}
              transformPlay_tablet={transformPlay_tablet}
              transformPlay_md={transformPlay_md}
              transformPlay_lg={transformPlay_lg}
              // width_md={width_play}
              // heigth_md={height_play}
            />
          )}
          {thumb && thumb.childImageSharp ? (
            <GatsbyImage
              className={className}
              onClick={() => setShowVideo(true)}
              image={getImage(thumb.childImageSharp.gatsbyImageData)}
              alt="Video"
              style={{
                height: `${style.height}` || "100%",
                width: `${style.width}` || "100%",
                borderRadius: `${style.borderRadius}` || "auto",
              }}
            />
          ) : (
            <Thumbnail
              className={className}
              onClick={() => setShowVideo(true)}
              src={
                (thumb && thumb.replace("/static", "")) ||
                `https://img.youtube.com/vi/${id}/${image()}.jpg`
              }
              alt="Video"
              style={{
                height: `${style.height}` || "100%",
                width: `${style.width}` || "100%",
                borderRadius: `${style.borderRadius}` || "auto",
              }}
            />
          )}
        </Image>
      )}
    </VideoWrapper>
  );
};

export default Player;

Player.defaultProps = {
  onPlay: () => {},
  onPause: () => {},
  onEnd: () => {},
  onError: () => {},
  onStateChange: () => {},
  onPlaybackRateChange: () => {},
  onPlaybackQualityChange: () => {},
  imageSize: "default",
  playerVars: {},
  noCookies: false,
  thumb: null,
  style: {},
};

Player.propTypes = {
  /** ID of the youtube video to play . */
  id: PropTypes.string.isRequired,
  /** .function to run when the video starts Playing */
  onPlay: PropTypes.func,
  /** .Function that runs when the video is paused */
  onPause: PropTypes.func,
  /** . Functinn that runs on the end of the video */
  onEnd: PropTypes.func,
  /** .Function that runs when the video encounters an error */
  onError: PropTypes.func,
  /** .Function that runs when the video changes state like from playing to paused */
  onStateChange: PropTypes.func,
  /** .Function that runs when the video encounters changes playback rater */
  onPlaybackRateChange: PropTypes.func,
  /** .Function that runs when the video changes quality */
  onPlaybackQualityChange: PropTypes.func,
  /** https://developers.google.com/youtube/player_parameters */
  playerVars: PropTypes.object,
  /** .Styles to apply over the wrappr */
  style: PropTypes.object,
  /** .if set to true will change the host to  "https://www.youtube-nocookie.com" */
  noCookies: PropTypes.bool,
  /** .Size of the thumbnail we get from youtube */
  imageSize: PropTypes.oneOf([
    "default",
    "hqdefault",
    "mqdefault",
    "sddefault",
    "maxresdefault",
  ]),
};

const Play = styled.button`
  background: ${(props) => props.background || "rgba(0, 0, 0, 0.7)"};
  border-radius: 3px;
  color: ${(props) => props.white};
  font-size: 1em;
  height: 36px;
  padding: 0;
  text-align: center;
  text-indent: 0.1em;
  transition: all 150ms ease-out;
  width: 36px;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.transformPlay || "translateX(-50%) translateY(-50%)"};
   {
    /*translateX(-50%) translateY(-50%);*/
  }
  border: none;
  opacity: ${(props) => props.opacity || "0.8"};
  cursor: pointer;
  z-index: 9;
  &:hover {
    background: black;
  }
  &:before {
    border-radius: 5% / 50%;
    bottom: 9%;
    content: "";
    left: -5%;
    position: absolute;
    right: -5%;
    top: 9%;
  }
  &:after {
    border-style: solid;
    border-width: 1em 0 1em 1.732em;
    border-color: transparent transparent transparent rgba(255, 255, 255, 1);
    content: " ";
    font-size: 0.45em;
    height: 0;
    margin: -1em 0 0 -0.75em;
    top: 50%;
    position: absolute;
    width: 0;
  }
  @media ${Devices.xxs} {
  }
  @media ${Devices.xs} {
  }
  @media ${Devices.sm} {
  }
  @media ${Devices.tablet} {
    left: ${(props) => props.leftPlay_tablet || "50%"};
    transform: ${(props) => props.transformPlay_tablet};
  }
  @media ${Devices.md} {
    height: ${(props) => props.height || "44px"};
    width: ${(props) => props.width || "44px"};
    font-size: ${(props) => props.fontSize || "0.75em"};
    transform: ${(props) => props.transformPlay_md};
    &:after {
      font-size: ${(props) => props.fontSize || "0.75em"};
    }
  }
  @media ${Devices.lg} {
    transform: ${(props) => props.transformPlay_lg};
  }
  @media ${Devices.xl} {
  }
  @media ${Devices.xxl} {
  }
`;
