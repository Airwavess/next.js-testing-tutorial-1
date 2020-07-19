import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 180,
  },
  cardContent: {
    height: "100%",
    flexGrow: 1,
  },
}));

const InfoCard = ({ id, url, title, content, openDialog }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} data-testid="card">
      <CardMedia
        id="card-iframe"
        component="img"
        className={classes.cardMedia}
        image={url}
        title="card-iframe"
        controls
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => openDialog(id)}
          data-testid="share-btn"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
