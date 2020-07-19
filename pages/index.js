import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";
import SharedLinkDialog from "../components/SharedLinkDialog";
import { getImageData } from "../lib/data";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGroupName: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Index = ({ images }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (id) => {
    const url = `https://example.com/images/${id}`;
    setEmbedUrl(url);
    setOpenDialog(true);
  };

  return (
    <>
      <NavBar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Shareable content
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            You can click "share" button to get a shared link.
          </Typography>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.cardGroupName}
          >
            Shareable image content
          </Typography>
          <Grid container spacing={4}>
            {images.map((image) => (
              <Grid item key={image.id} xs={12} sm={6} md={4}>
                <InfoCard {...image} openDialog={handleOpenDialog} sharedLink />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <SharedLinkDialog
        open={openDialog}
        onClose={handleCloseDialog}
        embedUrl={embedUrl}
      />
    </>
  );
};

export async function getStaticProps() {
  const images = getImageData();

  return {
    props: {
      images,
    },
  };
}

export default Index;
