import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

import memories from './images/coffee_word_inscription_156916_1920x1080 - 복사본.jpg'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Memories
                </Typography>
                <img src={memories} alt="memories" height="60" width="80" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
