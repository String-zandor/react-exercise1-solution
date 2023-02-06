//Call all functions inside services and log updated value/s
import {
  updateUser,
  getAllUsers,
  getUserById,
  addUser,
} from "./services/users";

import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";

import {
  getComments,
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";

console.log("GET ALL USERS");
console.log(getAllUsers());

console.log("UPDATE USER");
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());

console.log(getUserById(1));

console.log("ADD USER");
addUser({
  name: "T.S. Eliot",
  username: "tseliot",
  email: "tseliot@gmail.com",
});
console.log(getAllUsers());

console.log("GET POSTS");
console.log(getPosts());

console.log("GET POSTS BY USER");
console.log(getPostsByUser(1));

console.log("GET POST BY ID");
console.log(getPostById(1));

console.log("ADD POST");
addPost({ userId: 1, title: "Sample title", body: "Sample body" });
console.log(getPosts());

console.log("UPDATE POST TITLE");
updatePostTitle(1, "Revised Post Title");
console.log(getPostById(1));

console.log("UPDATE POST BODY");
updatePostBody(1, "Revised Post Body");
console.log(getPostById(1));

console.log("UPDATE POST");
const updatedPost = {
  title: "Another revised Title",
  body: "Another revised body",
};
updatePost(1, updatedPost);
console.log(getPostById(1));

console.log("DELETE POST BY ID");
deletePostBy(1);
console.log(getPosts());

console.log("DELETE POST BY USERID");
deletePostsByUserId(1);
console.log(getPosts());

console.log("GET COMMENT BY ID");
console.log(getCommentById(1));

console.log("GET COMMENTS BY POSTID");
console.log(getCommentsByPostId(1));

console.log("UPDATE COMMENT BODY");
updateCommentBody(1, "Sample Body");
console.log(getCommentById(1));

console.log("DELETE COMMENT BY ID");
deleteCommentById(2);
console.log(getComments());

console.log("ADD COMMENT");
const newComment = {
  postId: 1,
  name: "Sample comment name",
  email: "sample@gmail.com",
  body: "Sample comment body",
};
addComment(newComment);
console.log(getComments());
