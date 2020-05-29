import React,{Fragment} from 'react';

const Cotizacion = ({resultadofinal}) => {
    if(Object.keys(resultadofinal).length === 0) return null;
    return ( 
        <Fragment>
            <div className="card my-5">
                <div class="card-header bg-primary h4 text-center text-white">{resultadofinal.FROMSYMBOL}</div>
                <div className="card-body">
                    <h5>Precio: {resultadofinal.PRICE}</h5>
                    <h5>Valor más alto del día: {resultadofinal.HIGHDAY}</h5>
                    <h5>Valor más bajo del día: {resultadofinal.LOWDAY}</h5>
                    <h5>Variación últimas 24 horas: {resultadofinal.CHANGEPCT24HOUR}</h5>
                    <h5>Última actualización: {resultadofinal.LASTUPDATE}</h5>
                </div>
                <div className="card-footer text-right h4">
                    CodePic
                </div>
            </div>
            
        </Fragment>
     );
}
 
export default Cotizacion;