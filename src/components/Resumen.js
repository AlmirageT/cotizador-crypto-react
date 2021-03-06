import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    //extraer de datos
    const {marca, year, plan} = datos;

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') return null

    return ( 
        <ContenedorResumen>
            <h2>Resumen Cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propType = {
    datos: PropTypes.object.isRequired
}
export default Resumen;
