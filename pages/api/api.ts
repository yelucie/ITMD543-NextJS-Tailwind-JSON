export const getServerSideProps = async () => {
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await postsRes.json();

  const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await usersRes.json();

  return {
    props: {
      posts,
      users,
    },
  };
};