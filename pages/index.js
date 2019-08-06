import fetch from 'isomorphic-unfetch';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const Index = props => (
  console.log('data', props.data),
  console.log('dataList', props.dataList),

  <Container fixed>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h1>Movie Name</h1>
      </Grid>
      <Grid item xs={6}>
        <h1>Movie Details</h1>
      </Grid>
    </Grid>
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