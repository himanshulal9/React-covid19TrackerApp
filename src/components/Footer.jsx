import { Typography } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Footer() {
  return (
    <Grid container>
      <Grid item xs={12} style={{ backgroundColor: "#efefef" }}>
        <Box p={2}>
          <Typography
            variant='body1'
            component='h6'
            color='textSecondary'
            align='center'>
            Created with <FavoriteIcon color='secondary' /> All right Reserved{" "}
            <a href='http://www.manit.ac.in' target='blank'>
              @MANIT
            </a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
