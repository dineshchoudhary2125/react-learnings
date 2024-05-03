import  { useState, useContext } from 'react';
import UserContext from '../context/userContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="mb-4 bg-blue-500 p-10 rounded-lg ">
      <h2 className='text-3xl mb-4 text-black font-bold'>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-64 h-12 px-4 mb-4 rounded border border-gray-300"

      />
      <br />
      <input
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-64 h-12 px-4 mb-4 rounded border border-gray-300"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
