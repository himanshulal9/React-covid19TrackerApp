import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Chart from "chart.js";

export const renderGraph = ({
  elementIdName,
  type,
  datalabels,
  dataOfLabels,
  graphTitle,
  backgroundColor,
  borderColor,
}) => {
  let ctx = document.getElementById(elementIdName).getContext("2d");
  let myChart = new Chart(ctx, {
    type: type ? type : "bar",
    data: {
      labels: datalabels,
      datasets: [
        {
          label: graphTitle,
          data: dataOfLabels,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
              beginAtZero: true,
              callback: function (label, index, dataOfLabels) {
                return label / 1000000 + "m";
              },
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  return myChart;
};

export const renderDispalyCard = ({ key, value, bgColor }) => (
  <Card raised={true}>
    <CardContent>
      <Grid container spacing={1}>
        <Grid
          item
          xs={"auto"}
          style={{ backgroundColor: bgColor, paddingRight: "1px" }}></Grid>
        <Grid item xs={11}>
          <Typography color='textSecondary' gutterBottom align='center'>
            {key}
          </Typography>
          <Typography
            variant='h5'
            component='h2'
            style={{ color: bgColor, textAlign: "center" }}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
