import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue, blueGrey, green } from "@material-ui/core/colors";
import CountUp from "react-countup";
import { renderDispalyCard, renderGraph } from "./componentUtils";
import { GetAllSummary, GetIndiaActiveCases } from "../api/covid19Tracker";
import indianFlag from "../images/indianFlag.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  cardheader: {
    display: "flex",
    flexFlow: "row wrap",
    padding: theme.spacing(1, 2),
    background: "#f8f8f8",
  },
  cardIcon: {
    width: `${theme.spacing(5)}px`,
    height: "auto",
    paddingRight: theme.spacing(1),
  },
  cardtitle: {
    color: blueGrey[800],
    lineHeight: `${theme.spacing(5)}px`,
  },
}));

export default function BodyComponent() {
  const classes = useStyles();
  const [indianCases, setIndianCases] = useState([]);
  const [globalCases, setGlobalCases] = useState({});
  const [totalCases, settotalCases] = useState({});

  const [fetched, setFetched] = useState(false);
  const [fetchSummary, setFetchSummary] = useState(false);
  //calling graph fx
  const renderTotalIndianCase = () =>
    renderGraph({
      elementIdName: "myChart",
      type: "line",
      datalabels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dataOfLabels: indianCases,
      graphTitle: "Total Active Cases",
      backgroundColor: [blue[50]],
      borderColor: [blue[500]],
    });

  //rendering the summary
  useEffect(() => {
    !fetchSummary &&
      GetAllSummary().then(({ data: { Global } }) => {
        setGlobalCases({
          "New Cases": Global.NewConfirmed,
          "Total Cases": Global.TotalConfirmed,
          "New Deaths": Global.NewDeaths,
          "Total Deaths": Global.TotalDeaths,
          "New Recovery": Global.NewRecovered,
          "Total Recovery": Global.TotalRecovered,
        });
        setFetchSummary(true);
      });
    //calling graph function
    renderTotalIndianCase();
    console.log("totalCases", totalCases);
  });

  useEffect(() => {
    !fetched &&
      GetIndiaActiveCases().then(({ data: { cases_time_series } }) => {
        const data = {};
        cases_time_series.forEach((item, i) => {
          const DATE = new Date(item.date);
          const CurrentMonth = DATE.getMonth();
          const CurrentYear = DATE.getFullYear();
          if (!data[CurrentYear]) {
            data[CurrentYear] = {};
          }
          if (!data[CurrentYear][CurrentMonth]) {
            data[CurrentYear][CurrentMonth] = item.totalconfirmed;
          } else {
            data[CurrentYear][CurrentMonth] =
              Number(data[CurrentYear][CurrentMonth]) + +item.totalconfirmed;
          }
        });
        // console.log("cases", data);
        settotalCases(data);
        const IndiaCases = Object.keys(data["2021"]).map((item, i) => {
          return data["2021"][item];
        });
        setIndianCases(IndiaCases);
        setFetched(true);
      });
  });

  return (
    <Container maxWidth='xl'>
      {/* Display card Section  */}
      {!fetchSummary ? (
        <Box
          style={{ display: "flex", height: "200px", flexFlow: "column" }}
          justifyContent='center'
          alignItems='center'>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            Loading Global Status ...
          </Typography>

          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <Grid container spacing={1} className={classes.root}>
          {Object.entries(globalCases).map((item, i) => (
            <Grid key={i} item xs={6} sm={3}>
              {renderDispalyCard({
                key: item[0],
                value: <CountUp start={0} end={item[1]} duration={2.75} />,
                bgColor:
                  item[0] === "New Cases"
                    ? blue[500]
                    : item[0] === "Total Cases"
                    ? blue[500]
                    : item[0] === "New Deaths"
                    ? "#e53935"
                    : item[0] === "Total Deaths"
                    ? "#e53935"
                    : green[600],
              })}
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container spacing={1}>
        {/* Graph section  */}
        <Grid item xs={12} sm={12} lg={12}>
          <Card>
            <Box className={classes.cardheader}>
              <img alt='flag' src={indianFlag} className={classes.cardIcon} />
              <Typography className={classes.cardtitle}>India</Typography>
            </Box>
            <CardContent>
              <canvas id='myChart' width='100%' height='400'></canvas>
            </CardContent>
          </Card>
        </Grid>
        {/* pupular Countries  */}
      </Grid>
    </Container>
  );
}
