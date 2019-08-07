import fetch from 'isomorphic-unfetch';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/app.scss';
// import CardMedia from '@material-ui/core/CardMedia';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const posRelative = {
  position: 'relative',
}

const Index = props => (
  console.log('data', props.data),
  console.log('dataList', props.dataList.results),

  <Container fixed className={'contaier'}>

    <Grid container spacing={3} className={'movie-thumbnail-block'}>
      <Grid item xs={12} md={2}>
        <div className={'movie-thumbnail'}>
          <img src={`${imageBaseUrl}${props.data.backdrop_path}`} alt={props.data.title} />
        </div>
      </Grid>
      <Grid item xs={12} md={7} style={posRelative}>
        <div className={'movie-details'}>
          <div className={'movie-title'}>
            <h3>{props.data.title}</h3>
            <button>star</button>
          </div>
          <div className={'button-group'}>
            <Button variant="contained" className={'play'}>
              Play
            </Button>
            <Button variant="contained" className={'watch-later'}>
              Watch Later
            </Button>
            <Button variant="contained" color="primary" className={'share'}>
              Share
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>

    <Grid container className={'movie-details-block'}>
      <Grid item xs={12} md={6} className={'movie-synopsis'}>
        <h2>Synopsis</h2>
        <p>
          {props.data.overview}
        </p>
      </Grid>
      <Grid item xs={12} md={6} className={'movie-banner'}>
        <img src={`${imageBaseUrl}${props.data.backdrop_path}`} alt={props.data.title} />
      </Grid>
    </Grid>

    <div className={'related-movie-block'}>
      <h3>Related Videos</h3>
      <Grid container className={'related-movie-grid'}>
        {
          props.dataList.results.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3} className={'related-movie-list'}>
                <Card className={'related-movie-card'}>
                  <CardMedia
                    component={'img'}
                    alt={item.title}
                    image={`${imageBaseUrl}${item.backdrop_path}`}
                  />
                  <CardContent>
                    <Typography gutterBottom>
                      {item.title}
                    </Typography>
                  </CardContent>
                  <Button variant="contained" color="primary" className={'play'}>
                    Play
                  </Button>
                </Card>
              </Grid>
            );
          })
        }
      </Grid>
    </div>

  </Container>
);

Index.getInitialProps = async function () {
  /* BASE URL */
  const baseUrl = 'https://api.themoviedb.org/3/movie/343611';

  /* PARTICULAR MOVIE DETAILS API CALL */
  const resMovie = await fetch(`${baseUrl}?api_key=8e0bc1114b862d78c97488527814d264&language=en-US`);
  const data = await resMovie.json();

  const resMovieList = await fetch(`${baseUrl}/similar?api_key=8e0bc1114b862d78c97488527814d264&language=en-US&page=1`);
  const dataList = await resMovieList.json();

  return { data, dataList };
};

export default Index;