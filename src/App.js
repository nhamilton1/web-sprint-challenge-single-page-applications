import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import * as yup from 'yup'
import schema from './validation/formSchema'
import Order from './components/UserOrder'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instructions: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  garlic: false,
  cheese: false,
  sausage: false,
  pepperoni: false
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialUsers = []
const initialDisabled = true

const App = () => {

  const [ user, setUser ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/orders', newUser)
      .then(res => {
        setUser([res.data, ...user]);
      }).catch(err => console.error(err));

    setFormValues(initialFormValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues,[name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      size: formValues.size.trim(),
      garlic: formValues.garlic,
      cheese: formValues.cheese,
      sausage: formValues.sausage,
      pepperoni: formValues.pepperoni
      // toppings: ['cheese', 'sausage', 'garlic', 'pepperoni'].filter(toppings => !!formValues[toppings]),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
          {
          user.map(user => {
            return ( 
            <Order key={user.id} user={user}
            />
            )
          })
          }
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
