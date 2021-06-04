# About
```
This is a simple project. Posts on the left, and comments related to the post on the right. You can add comments to each single post and they'll stay alive at refresh. Since the API does not provide a limit/skip documents option, and there are only 100 posts, they're fetched all at once and saved in the memory, while the pagination changes dynamically. If there were around 1.000.000 posts, I'd fetch the API once between a certain amount of posts.
```

# Installation
```
npm install
```

# Tests (Jest)
```
npm t
```

# Run
```
npm start
```

# Usage
```
App runs in http://localhost:3000
```

# Features

* Added comments are kept alive after refresh (in localStorage)

# Comments

```
Even though the provided API was https://jsonplaceholder.typicode.com/comments, https://jsonplaceholder.typicode.com/posts/{postId}/comments returns the comments from that single post.
```
