import * as yup from 'yup';

const userSchema = yap.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required,
    password: yup.string().min(6).required()
})