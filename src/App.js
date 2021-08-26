import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './react-logo.png'
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchproducts = async () => {
    setLoading(true);
    const req = await fetch(`https://fakestoreapi.com/products`);
    const products = await req.json();
    setproducts(products);
    setLoading(false);
  }

  const handleUserQuery = e => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    fetchproducts();
  }, []);

  const filteredProducts = products.filter(product => 
        product.category.toLowerCase().includes(query.toLowerCase()) || product.title.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="App">
    <Input placeholder="Search electronics, clothing, jewelry.." onChange={handleUserQuery} />
    <Grid>
    {
      !loading && filteredProducts ? filteredProducts.map(product => (
        <Product key={product.id}>
          <Price>{product.price}</Price>
          <small>${product.category}</small>
          <h3>{product.title}</h3>
          <Image src={product.image}/>
          <p><em>{product.description.slice(0, 100)}</em></p>
        </Product>
      )) : (
          <Loading>
            <img src={Logo} />
          </Loading>
      )
    }
    </Grid>

    </div>
  )
}
const Loading = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: spin 2s infinite alternate;

  img {

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

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

const Price = styled.div`
  transition: .2s all ease-in-out;
  opacity: 0;
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: .95rem;
  background: #2e2e2e;
  color: #eee;
  backdrop-filter: blur(9px);
  padding: .25rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const Product = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0,0,0,.2);
  color: #eee;
  padding: .75rem;
  font-size: 1rem;
  backdrop-filter: blur(15px);
  margin: 1rem;
  border-radius: 9px;
  box-shadow: 1px 3px 20px rgba(0,0,0,.1);
  transition: .2s all ease-in-out;
  &:hover {
    transform: translateY(-3px);
    ${Price} {
      opacity: 1;
      top: -25px;
      right: -25px;
    }
  }
`;

const Image = styled.img`
  max-height: 150px;
  max-width: 150px;
  border-radius: 12px;
  object-fit: cover;
`;



export default App;
