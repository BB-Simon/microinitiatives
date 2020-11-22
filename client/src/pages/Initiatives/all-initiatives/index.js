import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import samimFont from "../../../assets/samim-fonts/ArbFONTS-Samim-FD-WOL.ttf";

import { Grid, makeStyles } from "@material-ui/core";
import Initiativecard from "../component/Initiativecard";

const useStyles = makeStyles((theme) => ({
  btn3: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    background: "#fff",
    color: "rgba(16, 24, 32, 0.65)",
    fontFamily: "inherit",
    fontSize: "12px",
    marginRight: "15px",
    padding: "11px 18px",
    "&:hover": {
      color: "rgba(16, 24, 32, 0.65)",
      background: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));
const Allinitiatives = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <div>
        <div className="d-flex align-items-center mb-style">
          <h2
            style={{
              marginBottom: "0",
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgba(0, 0, 0, 0.85)",
            }}
          >
            كل المبادرات
          </h2>
          <Button variant="outlined" className={classes.btn3}>
            <span className="ml-1">الأحدث</span>
            <RiArrowDownSLine />
          </Button>
        </div>
        <div className="my-4">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Initiativecard />
            </Grid>
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Allinitiatives;
const Wrapper = styled.div`
  margin: 50px 0;
  text-align: right;
  font-family: Samim-FD-WOL;
  @font-face {
    font-family: Samim-FD-WOL;
    src: url(${samimFont});
  }
  @media screen and (max-width: 760px) {
    .mb-style {
      justify-content: space-between;
    }
  }
`;
