import React, { useState, useEffect } from 'react'
import { Select, MenuItem, Grid  } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import { commerce } from '../../pages/commerce';
import { Link } from 'react-router-dom';

const AddressForm = ({checkoutToken, next}) => {
    const[shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
     const [shippingSubdivision, setShippingSubdivision] = useState('');
     const [shippingOptions, setShippingOptions] = useState([]);
      const [shippingOption, setShippingOption] = useState('');

    
    const methods = useForm();

     const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision, checkoutToken.id, shippingCountry]);




    return (
        <>
            <h2 className="titulo alinhamento--meio endere??o--titulo">Endere??o de entrega</h2>
            <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="Primeiro nome"/>
                    <FormInput required name="lastName" label="Sobrenome"/>
                    <FormInput required name="email" label="Email"/>
                    <FormInput required name="address1" label="Endere??o"/>
                    <FormInput required name="number" label="Numero"/>
                    <FormInput required name="city" label="Cidade"/>
                    <FormInput required name="zip" label="CEP"/>
                <Grid item xs={12} sm={6}>
                <h2 className=" titulo--entrega">Pa??s</h2>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
              <Grid item xs={12} sm={6}>
              <h2 className=" titulo--entrega">Estado</h2>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
             <Grid item xs={12} sm={6}>
              <h2 className=" titulo--entrega">Op????es de entrega</h2>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
         </Grid>
          <br />
          <div className="container">
          <button type="submit" className="botao botao--entrega">Proximo</button>
           <Link to="/carrinho"><button className="botao botao--alternativo ">Voltar carrinho</button></Link>
          
          </div>
        </form>
     </FormProvider>
        </>
    );
};

export default AddressForm;
