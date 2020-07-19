import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
}));

const SharedLinkModal = ({ open, onClose, embedUrl }) => {
  const classes = useStyles();

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <Dialog
      className={classes.paper}
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>Embed url</DialogContentText>
        <Input
          readOnly
          value={embedUrl}
          onFocus={handleFocus}
          fullWidth
          inputProps={{
            "data-testid": "embed-url",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SharedLinkModal;
