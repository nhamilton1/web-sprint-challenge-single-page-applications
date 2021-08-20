import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(2, 'Username must be 2 characters long'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'XL'], 'Please Select Your Pizza Size'),
    instructions: yup
        .string()
        .trim(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    garlic: yup.boolean()
})

export default formSchema