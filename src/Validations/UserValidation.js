import * as yup from 'yup';

export const userSchema = yup.object().shape({
    displayName: yup.string().required("Обязательное поле"),
    email: yup.string().email("Некорректная почта").required("Обязательное поле"),
    password: yup.string().min(6, "Пароль должен быть не менее 6 символов").matches().required("Обязательное поле"),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Пароли не совпадают").required("Обязательное поле")
})