// import Layout from '../../comps/MyLayout';
// import fetch from 'isomorphic-unfetch';

// const Post = props => (
//   console.log(props),
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// );

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.themoviedb.org/3/movie/343611?api_key=8e0bc1114b862d78c97488527814d264&language=en-US${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };

// export default Post;