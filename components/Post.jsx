const Posts = ({ posts, users }) => {
  return (
    <div className="2xl:px-16">
      <h2 className="text-2xl font-bold py-4">Posts</h2>
      <ul className="list-none">
        {posts.map((post) => {
          const user = users.find((user) => user.id === post.userId);

          return (
            <li key={post.id} className="mb-2 p-4 border border-gray-300 rounded-lg">
              <span className="font-bold text-lg">{post.title}</span><br></br>
              {post.body}<br></br>
              <span className="italic text-sm text-gray-600">Posted by {user.name}</span>
            </li>
          )})}
      </ul>
    </div>
  );
};

export default Posts;
