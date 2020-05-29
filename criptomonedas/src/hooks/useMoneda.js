import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: cursive;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4 rem;
    margin-top: 2rem;
    display: block;
`;

const useMoneda = (label, stateInicial, opciones) =>{

    //State de nuestro custom hook
    const [state, setstate] = useState(stateInicial);

    const Seleccionar = () =>{
        const FnCapturarValor = (e) =>{
            setstate(e.target.value);
        }

        return(
            <Fragment>
                <Label>{label}</Label>
                <select
                    className="form-control"
                    onChange={FnCapturarValor}
                    value={state}
                >
                    <option value="">--Selecciona uno --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}            
                </select>
            </Fragment>
        );
    }

    // Retornar state, interfaz y fn que modifica el state
    return[state, Seleccionar, setstate];
}

export default useMoneda;