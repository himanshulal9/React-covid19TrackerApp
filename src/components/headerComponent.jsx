import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import RssFeedIcon from "@material-ui/icons/RssFeed";

export default function HeaderComponent() {
  return (
    <AppBar position='static' style={{ background: indigo["A400"] }}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <BubbleChartOutlinedIcon />
        </IconButton>
        <Typography variant='h6'>
          <a
            href='https://himanshulal9.github.io/React-covid19TrackerApp/'
            style={{
              textDecoration: "none",
              color: "white",
            }}>
            {" "}
            Covid19 Tracker{" "}
          </a>
        </Typography>
        <a
          href='https://himanshulal9.github.io/ReactUserForm'
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "auto",
          }}>
          <Button
            variant='outlined'
            color='default'
            startIcon={<RssFeedIcon />}
            style={{
              color: "white",
              borderColor: "white",
            }}>
            Feedback And Grievance
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  );
}
