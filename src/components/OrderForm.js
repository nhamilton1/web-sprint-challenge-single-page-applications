import React from 'react'

export default function OrderForm(props) {
    const { values, submit, change, errors, disabled } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div>
                <h2>Make your own Pizza</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
            <label>
                Name:
                <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'  
                    id='name-input'
                />
            </label>
            <h4>Select your pizza size:</h4>
            <label>
                <select 
                    onChange={onChange}
                    value={values.size}
                    name='size'
                    id='size-dropdown'
                >
                    <option value=''>- Select a Size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='XL'>Extra Large</option>
                </select>
            </label>
            <h4>Pick your toppings</h4>
            <label>
                Cheese
                <input 
                    type="checkbox"
                    name="cheese"
                    checked={values.cheese}
                    onChange={onChange}
                />
            </label>
            <label>
                sausage
                <input 
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>
            <label>
                pepperoni
                <input 
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                />
            </label>
            <h6>Any Special instructions?</h6>
            <label>
                <input 
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'  
                    id='special-text'
                />
            </label>
            <button disabled={disabled} id='order-button'>submit</button>
        </form>
    )
}