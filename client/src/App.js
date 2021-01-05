import React from 'react';
import { Container , Typography , Grow , Grid , AppBar} from '@material-ui/core'

import memories from './Images/yarn.png'

import Posts from './Components/Posts/posts.js'
import Form from './Components/Form/forms.js'
import useStyles from './styles.js'

const App = () => {
     const classes = useStyles();
    return(
    <Container maxidth="lg">
        <AppBar className={classes.appBar} color="inherit" position="static">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="100px"></img>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid xs={12} sm={7}>
                        <Posts/>
                        </Grid> 
                    <Grid xs={12} sm={4}>
                        <Form/>
                        </Grid> 
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App;