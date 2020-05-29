import React, { Fragment, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #326AFF;
    border:none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({settotalmonedas,settotalcriptomonedas}) => {

    const [listacripto, setlistacripto] = useState([]);
    const [error, seterror] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'COP', nombre: 'Peso Colombiano'},
    ];

    const [moneda , SelectMoneda ] = useMoneda('Elige tu moneda','', MONEDAS);
    const [criptomoneda, SelectCripto] = useCriptoMoneda('Elige tu criptomoneda','',listacripto);

    // Llamado a API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);
            setlistacripto(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const ConsultarResultados = (e) =>{
        e.preventDefault();

        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);
        settotalmonedas(moneda);
        settotalcriptomonedas(criptomoneda);
        
    }

    return ( 
        <Fragment>
            <form
                onSubmit={ConsultarResultados}
            >
                {error ? <Error /> : null}
                <SelectMoneda />
                <SelectCripto />

                <Boton
                    type="submit"
                    value="Consultar"
                ></Boton>
            </form>
        </Fragment>
     );
}
 
export default Formulario;