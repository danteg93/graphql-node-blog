class FakeDatabase {
  constructor() {
    this.authors = [
      {id: '93e8olo1', name: 'Dante Garcia', email: 'dante@test.com'},
      {id: '12b9bno4', name: 'Sally Wu', email: 'sally@test.com'},
      {id: '69s8nut8', name: 'Mc Lovin', email: 'lol@test.com'}
    ];

    this.blogPosts = [
      {
        id: 1,
        title: 'Omg What is this',
        conent: 'YOu will like this post. Or nah tbh',
        author: '93e8olo1'
      },
      {
        id: 2,
        title: 'I Love Hedghogs',
        conent: 'They have stubby legs and their eyes D:',
        author: '12b9bno4'
      },
      {
        id: 3,
        title: 'Fake Ids LOL',
        conent: 'You can very easily get a fake ID lmao',
        author: '69s8nut8'
      },
    ];

    this.comments = [
      {id: 1, postId: 1, name: 'Anonymous', content: 'I hope you fail at blogging lmao'},
      {id: 2, postId: 1, name: 'Nick', content: 'This Article sucks. QUit while you can SMH'},
      {id: 3, postId: 3, name: 'Peter', content: 'You really shouldnt mess with fake IDS lol'}
    ]
  }

  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPost(id) {
    return this.blogPosts.filter((post) => {
      return post.id === id;
    })[0];
  }

  getCommentsForPost(postId) {
    return this.comments.filter((comment) => {
      return comment.postId === postId;
    });
  }

  getAuthor(authorId) {
    return this.authors.filter((author) => {
      return author.id === authorId;
    })[0];
  }

  getPostsOfAuthor(authorId) {
    return this.getBlogPosts().filter((item) => {
      return item.author === authorId;
    });
  }

  //Write Methods

  addNewBlogPost(post) {
    post.id = this.blogPosts.length + 1;
    this.blogPosts.push(post);
    return post;
  }

  addNewComment(comment) {
    comment.id = this.comments.length + 1;
    this.comments.push(comment);
    return comment;
  }
}

export const fakeDatabase = new FakeDatabase();
