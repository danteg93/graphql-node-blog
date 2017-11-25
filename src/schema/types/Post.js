import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import { Author } from "./Author";
import { fakeDatabase } from "../../FakeDatase";

export const Post = new GraphQLObjectType({
  name: "Post",
  description: "All details of a blog post",
  fields: () => {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: {
      type: Author,
      resolve: (post) => {
        return fakeDatabase.getAuthor(post.auhtor)
      }
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve: (post) => {
        return fakeDatabase.getCommentsForPost(post.id);
      }
    }
  }
});
