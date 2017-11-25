import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const Post = new GraphQLObjectType({
  name: "Post",
  description: "All details of a blog post",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});
