"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import {
  Box,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import logo from "../Images/Logo.png";
import image1 from "../Images/img1.png";
import image2 from "../Images/img2.png";
import image3 from "../Images/img3.png";
import image4 from "../Images/img4.png";
import image5 from "../Images/img5.png";
import crypto from "../Images/cryptoraggies.png";
import dog from "../Images/dog.png";
import bitfins from "../Images/bitfins.png";
import future from "../Images/future.png";
import pendulum from "../Images/pendulum.png";
import me from "../Images/me.png";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";

const index = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <Head>
        <title>brava | Shop NFT Apparel, Art, Accessories, & Home</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://png.pngtree.com/png-clipart/20210311/original/pngtree-letter-b-logo-png-image_6059117.jpg"
        ></link>
      </Head>
      <Box className="announcement">
        <Link href={"https://www.tiktok.com/@bravaland.com"}>
          VISIT US ON TIKTOK @bravaland.com
        </Link>
      </Box>
      {/* Navbar */}
      <Box className="navbar">
        <Flex className="navbar-row">
          <div className="bars">
            <i
              className={`fa ${isActive ? "fa-times" : "fa-bars"}`}
              onClick={toggleMenu}
            ></i>
          </div>
          <UnorderedList className={`nav-links ${isActive ? "active" : ""}`}>
            <ListItem>
              <a style={{ paddingRight: "10px" }}>brands</a>
            </ListItem>
            <ListItem>
              <a style={{ paddingRight: "10px" }}>shop</a>
            </ListItem>
            <ListItem>
              <a>premium</a>
            </ListItem>
            <ListItem>
              <a>gift cards</a>
            </ListItem>
            <ListItem>
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "#E1C200",
                }}
              >
                become an affiliate
              </Text>
            </ListItem>
            <ListItem>
              <Flex>
                <a
                  href="https://twitter.com/mybravaland"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "16px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 512 512"
                    fill="#FFFFFF"
                    width={"19px"}
                  >
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452
             0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 
             130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 
             0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 
             13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 
             216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@bravaland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "16px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    width={"19px"}
                    fill="#FFFFFF"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bravamarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "16px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    fill="#FFFFFF"
                    width={"19px"}
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </Flex>
            </ListItem>
          </UnorderedList>
          <div className="mobile-logo">
            <Image src={logo} alt="logo" width={110} height={52} />
          </div>
          <Box className="mobile-cart">
            <Flex>
              <a style={{ paddingRight: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 512 512"
                  width={"19px"}
                  fill="#FFFFFF"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </a>
              <a style={{ paddingLeft: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 448 512"
                  width={"19px"}
                  fill="#FFFFFF"
                >
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
              </a>
            </Flex>
          </Box>
          {/* Left Content */}
          <Box className="navbar-left">
            <UnorderedList>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "yellow",
                  },
                }}
              >
                <a style={{ paddingRight: "10px" }}>brands</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#FFFFFF"
                >
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 
                  0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "yellow",
                  },
                }}
              >
                <a style={{ paddingRight: "10px" }}>shop</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#FFFFFF"
                >
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 
                  0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </ListItem>
              <ListItem>
                <a>premium</a>
              </ListItem>
              <ListItem>
                <a>gift cards</a>
              </ListItem>
            </UnorderedList>
          </Box>
          {/* Middle Content */}
          <div className="logo">
            <Image src={logo} alt="logo" width={110} height={52} />
          </div>
          {/* Right Content */}
          <Box className="navbar-right">
            <Text
              _hover={{
                cursor: "pointer",
                color: "#E1C200",
              }}
            >
              become an affiliate
            </Text>
            <UnorderedList>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a
                  href="https://twitter.com/mybravaland"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 512 512"
                    fill="#FFFFFF"
                    width={"19px"}
                  >
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452
             0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 
             130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 
             0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 
             13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 
             216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a
                  href="https://tiktok.com/@bravaland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    width={"19px"}
                    fill="#FFFFFF"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a
                  href="https://www.instagram.com/bravamarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    fill="#FFFFFF"
                    width={"19px"}
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    width={"19px"}
                    fill="#FFFFFF"
                  >
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </a>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 512 512"
                    width={"19px"}
                    fill="#FFFFFF"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </a>
              </ListItem>
              <ListItem
                _hover={{
                  cursor: "pointer",
                  "& svg": {
                    fill: "#e1c200",
                  },
                }}
              >
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 448 512"
                    width={"19px"}
                    fill="#FFFFFF"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                </a>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>

      {/* Slider */}

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <Image src={image1} className="image1" alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="image2" className="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="image3" className="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} alt="image4" className="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} alt="image5" className="image1" />
        </SwiperSlide>
      </Swiper>
      <Box className="wrapper">
        <Box className="slider">
          <Box className="slider-track">
            <Container className="slide1">
              <Image src={crypto} alt="crypt" />
              <h4 className="brand-name">#HOSKY</h4>
              <Text className="cta"> Shop Now</Text>
            </Container>
            <Container className="slide2">
              <Image src={dog} alt="dog" />
              <h4 className="brand-name">#HOSKY</h4>
              <p className="cta"> Shop Now</p>
            </Container>
            <Container className="slide3">
              <Image src={future} alt="future" />
              <h4 className="brand-name">#HOSKY</h4>
              <Text className="cta"> Shop Now</Text>
            </Container>
            <Container className="slide4">
              <Image src={me} alt="me" />
              <h4 className="brand-name">#HOSKY</h4>
              <Text className="cta"> Shop Now</Text>
            </Container>
            <Container className="slide5">
              <Image src={bitfins} alt="bitfins" />
              <h4 className="brand-name">#HOSKY</h4>
              <Text className="cta"> Shop Now</Text>
            </Container>
            <Container className="slide6">
              <Image src={pendulum} alt="pendulum" />
              <h4 className="brand-name">#HOSKY</h4>
              <Text className="cta"> Shop Now</Text>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default index;
