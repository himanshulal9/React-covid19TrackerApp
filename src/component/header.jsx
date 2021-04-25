import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import { indigo } from "@material-ui/core/colors";

export default function HeaderComponent() {
  return (
    <AppBar position='static' style={{ background: indigo[`A400`] }}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <BubbleChartOutlinedIcon />
        </IconButton>
        <Typography variant='h6' color='inherit'>
          Covid19 Tracker App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
