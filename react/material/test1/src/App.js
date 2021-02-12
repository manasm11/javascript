import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField'

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

import '@fontsource/roboto' // To add custom fonts
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    color: 'white'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          // color='primary'
          // disabled
          checked={checked}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)} />
        // inputProps={
        //   'aria-label': 'secondary checkbox'
        // } // Pata ni isse kya hua ???
      }
      label='Testing Checkbox' />
  )
}

function StyledButton({ children }) {
  const styles = useStyles()
  return (
    <Button className={styles.root} >
      { children}
    </Button>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar style={{height:50}} >
        <Toolbar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography>
            TITLE
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='lg'>
        <div className="App">
          <header className="App-header">
            <Typography variant='h2' component='div'>
              HELLO
            </Typography>
            <StyledButton>
              HELLO
            </StyledButton>
            
            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={10}>
                <Paper style={{height:100, width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={5}>
                <Paper style={{height:100, width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={5}>
                <Paper style={{height:100, width:'100%'}} />
              </Grid>
            </Grid>

            <TextField
              variant='outlined'
              // variant='filled'
              color='secondary'
              type='email'
              // type='time'
              // type='date'
              label='Set time'
              // value='test@test.test'
              placeholder='test@test.test'
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon/>}
                size='large'
                // disabled
                style={{
                  fontSize: 28
                }}
                variant='contained'
                color='primary'
              >
                Save
        </Button>
              <Button
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon/>}
                size='large'
                // disabled
                style={{
                  fontSize: 28
                }}
                variant='contained'
                color='secondary'
              >
                Delete
        </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
