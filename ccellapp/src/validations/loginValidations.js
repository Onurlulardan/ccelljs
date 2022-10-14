import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    loginfo: yup.string().required(" * Boş bırakılamaz!"),
    password: yup.string().min(8," * Şifreniz en az 8 karakter olmalı!").max(50).required(" * Boş bırakılamaz!"),
    ayndinlatma: yup.boolean().oneOf([true],'Metni onaylamanız gerekiyor!'),
    kvkk: yup.boolean().oneOf([true],' * Metni onaylamanız gerekiyor!')   
})