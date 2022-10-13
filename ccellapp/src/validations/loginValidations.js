import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    loginInfo: yup.string().required(),
    password: yup.string().min(8).max(50).required()
})