import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PromoSection from "./PromotionSection";
import MyAccordion from "./MyAccordion";

const data = [
  {
    title: "Enjoy on your TV",
    subTitle:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    isVideo: true,
    isTextFirst: true,
  },
  {
    title: "Download your shows to watch offline",
    subTitle: "Save your favorites easily and always have something to watch.",
    src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    isVideo: false,
    isTextFirst: false,
  },
  {
    title: "Watch everywhere",
    subTitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    isTextFirst: true,
  },
  {
    title: "Create profiles for kids",
    subTitle:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    src: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
    isTextFirst: false,
  },
];
function Home() {
  return (
    <div>
      {/* hero section */}
      <Box
        sx={{
          background: "url('/assets/landing-bg.jpeg') no-repeat center",
          height: "85vh",
          boxShadow: "inset 0px 5px 50px 200px rgba(0,0,0,0.7)",
          position: "relative",
        }}
      >
        {/* navigation */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 10,
          }}
        >
          <img src="/assets/logo.png" alt="logo img" width={150} />
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          >
            Sign in / Login
          </Button>
        </Box>

        <Box
          sx={{
            color: "#ffffff",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "80%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            Unlimited movies, TV shows, and more
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 3,
            }}
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 3,
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Box>
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              sx={{
                border: "1px solid #BBBBBB",
                borderRadius: 1,
                width: "400px",
                mr: 2,
                caretColor: "#FFFFFF",
                color: "#FFFFFF",
                "&.MuiTextField-root .MuiFormLabel-root": {
                  color: "#FFFFFF",
                },
                "&.MuiTextField-root .MuiFilledInput-input": {
                  color: "#FFFFFF",
                },
                "&.MuiTextField-root .Mui-focused.MuiFilledInput-root::after": {
                  borderBottom: 0,
                },
              }}
            />
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{
                textTransform: "capitalize",
                fontWeight: 600,
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                }}
              >
                Get Started
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#232323",
          height: 8,
        }}
      />

      {/* promotion section */}
      <Box
        sx={{
          color: "#FFFFFF",
          background: "#000000",
        }}
      >
        {data.map((data, index) => (
          <>
            <PromoSection {...data} key={index} />
            <Divider
              sx={{
                backgroundColor: "#232323",
                height: 8,
              }}
            />
          </>
        ))}
      </Box>

      {/* faq */}

      <Box
        sx={{
          backgroundColor: "#000000",
          textAlign: "center",
          color: "#FFFFFF",
          px: 16,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <MyAccordion
          title="What is Netflix?"
          subTitle="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />
        <MyAccordion
          title="How much does Netflix cost?"
          subTitle="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
        />
      </Box>
    </div>
  );
}

export default Home;
