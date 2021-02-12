import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Container maxWidth='md' style={{
      backgroundColor: "#ffff45"
    }}>
      <Grid container >
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
        </Grid>
      </Grid>
      <Grid container >
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
        </Grid>
      </Grid>
      <Grid container >
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
          </Grid>
        <Grid container xs={4} justify='center'>
          <Button>
            BTN1
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
