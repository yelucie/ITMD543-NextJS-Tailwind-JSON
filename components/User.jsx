const Users = ({ users }) => {
  return (
    <div className="2xl:px-16">
      <h2 className="text-2xl py-4">Users</h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user) => (
        <li key={user.id} className="mb-2 p-4 border border-gray-300 rounded-lg">
          <span className="font-bold text-lg">{user.name}</span><br></br>
          <span className="font-bold">Username</span>: {user.username}<br></br>
          <span className="font-bold">Email</span>: {user.email.toLowerCase()}<br></br>
          <span className="font-bold">Website</span>: {user.website}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
