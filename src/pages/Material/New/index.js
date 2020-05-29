import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment'
import FormMaterial from './../../../components/FormMaterial'
// import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";


export default function Material(props) {
    
    const id = props.match.params.id;
    console.log(id)



    return (
        <>
            <FormMaterial botao={"Cadastrar"} />
        </>
    )
}