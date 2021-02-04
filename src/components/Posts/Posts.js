import React from "react";

//import Post from './Post/Post';
import { useSelector } from "react-redux";

//import useStyles from './styles';
// const classes = useStyles();

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return <h1>Post</h1>;
};

export default Posts;
