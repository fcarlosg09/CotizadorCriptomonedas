import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cripto.png';
import Formulario from './Components/Formulario';
import axios from 'axios';
import Cotizacion from './Components/Cotizacion';
import Spinner from './Components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width:100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background: #66A2FE;
    display:block;
  }
`

function App() {

  const [totalmonedas, settotalmonedas] = useState('');
  const [totalcriptomonedas, settotalcriptomonedas] = useState('');
  const [resultadofinal, setresultadofinal] = useState({});
  const [cargando, setcargando] = useState(false);

  useEffect(() => {
    
    const cotizarCriptomoneda = async () =>{
      if(totalmonedas === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${totalcriptomonedas}&tsyms=${totalmonedas}`;

      const resultado = await axios.get(url);
      setcargando(true);

      setTimeout(() => {
        setcargando(false);
        setresultadofinal(resultado.data.DISPLAY[totalcriptomonedas][totalmonedas]);
      }, 500);      
    }
    cotizarCriptomoneda();

  }, [totalmonedas, totalcriptomonedas]);

  const componente = (cargando) ? <Spinner /> : <Cotizacion resultadofinal={resultadofinal} />

  return (
    <Contenedor>
      <div>      
       {componente}
      </div>      
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario 
          settotalmonedas={settotalmonedas}
          settotalcriptomonedas={settotalcriptomonedas}
        />        
      </div>
    </Contenedor>
  );
}

export default App;
