import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const GET_HELLO = gql`
  query GetHell {
    hello
  }
`;

function App() {
  const { loading, error, data, client, previousData, called } = useQuery(
    GET_HELLO
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error.message}`}</p>;

  console.log('client', client);
  console.log('previousData', previousData);
  console.log('called', called);

  return (
    <div className="App">
      <h1>{data.hello}</h1>
    </div>
  );
}

export default App;
