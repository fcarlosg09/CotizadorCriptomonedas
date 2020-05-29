import React, {useState, Fragment} from 'react';
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

const useCriptomoneda =(label, stateInicial, opciones) =>{

    const [state, setstate] = useState(stateInicial);

    const SeleccionarCripto = () => {

        const FnCapturarValorCripto = (e) =>{
            setstate(e.target.value);
        }

        return(
            <Fragment>
                <Label>{label}</Label>
                <select
                    className="form-control"            
                    value={state}
                    onChange={FnCapturarValorCripto}
                >
                    <option value="">--Selecciona uno --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))}            
                </select>
            </Fragment>
        )
    }

    return [state, SeleccionarCripto, setstate];
}

export default useCriptomoneda;