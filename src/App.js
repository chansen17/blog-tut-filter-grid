import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await req.json();
    setUsers(users);
    setLoading(false);
    console.log(users);
  }

  const handleUserQuery = e => {
    setQuery(e.target.value);
    console.log(query);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(partner => 
        partner.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="App">
    <Input placeholder="Search for one of our partners" onChange={handleUserQuery} />
    <Grid>
    {
      filteredUsers.map(user => (
        <User key={user.id}>
          <h3>{user.name}</h3>
          <h5>{user.company.name}</h5>
          <p><em>"{user.company.catchPhrase}"</em></p>
        </User>
      ))
    }
    </Grid>

    </div>
  )
}

const Input = styled.input`
  padding: .65rem;
  min-width: 250px;
  max-width: 400px;
  width: 100%;
  font-size: 1.25rem;
  margin: 3rem 0;
  outline: none;
  border: none;
  background: transparent;
  border-bottom: 2px solid #ccc;
  color: #eee;

  ::placeholder {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 1.15rem;
    color: #eee;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const User = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0,0,0,.4);
  color: #eee;
  font-size: 1.15rem;
  backdrop-filter: blur(15px);
  margin: 1rem;
  border-radius: 9px;
  box-shadow: 1px 3px 20px rgba(0,0,0,.1);
  transition: .2s all ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

export default App;
