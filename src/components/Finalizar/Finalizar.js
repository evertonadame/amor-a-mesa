import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel }  from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './finalizar.css';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { commerce } from '../../pages/commerce';


const steps = ['Endereço de entrega', 'Finalizar pagamento'];


const Finalizar = ({ cart, order, onCaptureCheckout, error }) => {

const useStyles = makeStyles(() => ({
        root: {
          "&  .MuiStepIcon-root": { color: "pink" }
        }
      }));

 const c = useStyles();

const [activeStep, setActiveStep] = useState(0);
const [checkoutToken, setCheckoutToken] = useState(null);
const [shippingData, setShippingData] = useState({})


useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

            setCheckoutToken(token);
        } catch (error) {

        }
    }

    generateToken();
}, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    const next = (data) => {
        setShippingData(data);
        nextStep();

    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
     ? <AddressForm checkoutToken={checkoutToken} next={next} />
     : <PaymentForm  shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep}/> 


    return (
        <>
            <div className="container finalizar">
            <main>
                <Paper className="finalizar__paper">
                    <h2 className="titulo titulo--destaque alinhamento--meio">Finalizar compra</h2>
                
                    <Stepper activeStep={activeStep} className={c.root}
                        
                    >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}  
                    </Stepper>
                   
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/> }
                </Paper>
            </main>
            </div>   
        </>
    )
}

export default Finalizar;
