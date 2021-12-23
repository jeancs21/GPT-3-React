import React, {useState, useEffect, useReducer} from 'react';
import './form.css';

const servicios = [
    {
        id: 0,
        nombre: 'Seleccionar...'
    },
    {
        id: 1,
        nombre: 'Servicio 1'
    },
    {
        id: 2,
        nombre: 'Servicio 2'
    }
]

const formInitState = {
    nombre: '',
    empresa: '',
    pais: '',
    cargo: '',
    email: '',
    numero: '',
    servicio: 0,
}

const formReducer = (state, { type, payload }) => {
    switch(type){
        case 'SET_FORM_FIELD':
            return { ...state, ...payload }
    }
}

const formActions = (dispatch) => ({
    handleChange: (value) => dispatch({
        type: 'SET_FORM_FIELD',
        payload: value,
    })
})

export default function Form({}){
    const [formState, dispatch] = useReducer(formReducer, formInitState);

    const { nombre,
        empresa,
        pais,
        cargo,
        email,
        numero,
        servicio } = formState;

    const handleFormFieldChange = (event) => {
        formActions(dispatch).handleChange({ [event.target.name] : event.target.value });
    }
    const submitForm = () => {
        console.log(formState);
    }
    return <div className="container">
        <img src='/logoFull.jpg' alt="logo" className='imgBorder' />
        <form className="form">
            <input
              type='text'
              name='nombre'
              placeholder='Nombre'
              value={nombre}
              onChange={handleFormFieldChange}
            />
            <input
              type='text'
              name='empresa'
              placeholder='Empresa'
              value={empresa}
              onChange={handleFormFieldChange}
            />
            <input
              type='text'
              name='pais'
              placeholder='País'
              value={pais}
              onChange={handleFormFieldChange}

            />
            <input
              type='text'
              name='cargo'
              placeholder='Cargo'
              value={cargo}
              onChange={handleFormFieldChange}

            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={handleFormFieldChange}

            />
            <input
              type='tel'
              name='numero'
              placeholder='Número de teléfono'
              value={numero}
              onChange={handleFormFieldChange}

            />
            <select
              value={servicio}
              name='servicio'
              onChange={handleFormFieldChange}
            >
                {servicios.map((servicio) => <option value={servicio.id}>{servicio.nombre}</option>)}
            </select>
            <button type="button" onClick={submitForm}>Contactar</button>
        </form>
    </div>
}