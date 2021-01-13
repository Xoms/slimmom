import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Некорректная длинна поля')
    .max(50, 'Превышен лимит символов')
    .required('Обязательное поле *'),
  password: Yup.string()
    .required('Обязательное поле *')
    .min(8, 'Некорректная длинна поля'),
});

export { SignupSchema };
