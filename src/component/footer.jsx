import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

export default function FooterComponent() {
  return (
    <Box mt={2} padding={2} component={Paper} bgcolor={indigo[`A400`]}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant='body1'
            component='h6'
            align='center'
            style={{ color: " white" }}>
            All right Reserved <span>&#169;</span> {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
