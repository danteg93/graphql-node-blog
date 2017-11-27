import { GraphQLList } from 'graphql';
import { Post } from '../types/Post'
import { fakeDatabase } from '../../FakeDatabase'

export default {
  author: {
    type: new GraphQLList(Post),
    description: 'Gets a specific author',
    args: {},
    resolve: () => {
      return fakeDatabase.getBlogPosts();
    }
  }
}
