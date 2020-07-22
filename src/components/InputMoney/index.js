import React from "react"
import PropTypes from 'prop-types'
import IntlCurrencyInput from "react-intl-currency-input"
import { useState } from "react";


const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};

const BrlCurrencyComponent = ({name, value, onChange}) => {

      const handleChange = (event, value_, maskedValue) => {
        event.preventDefault();
         onChange(value_)
        // console.log(name); // value without mask (ex: 1234.56)
        // console.log(value_); // value without mask (ex: 1234.56)
        // console.log(maskedValue); // masked value (ex: R$1234,56)
    };

    return (
        <IntlCurrencyInput
            currency="BRL"
            config={currencyConfig}
            onChange={handleChange}
           
        />
    );
}

export default BrlCurrencyComponent;