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

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Некорректная длинна поля')
    .max(50, 'Превышен лимит символов')
    .required('Обязательное поле *'),
  email: Yup.string()
    .min(2, 'Некорректная длинна поля')
    .max(50, 'Превышен лимит символов')
    .required('Обязательное поле *'),
  password: Yup.string().required('Обязательное поле *').min(8, 'Too short!'),
});

const formSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'Укажите значение от 100')
    .max(250, 'Укажите значение до 250')
    .required('Рост*'),
  age: Yup.number()
    .min(18, 'Укажите значение от 18')
    .max(99, 'Укажите значение до 100')
    .required('Возраст*'),
  weight: Yup.number()
    .min(20, 'Укажите значение от 20')
    .max(500, 'Укажите значение до 500')
    .required('Текущий вес*'),
  desiredWeight: Yup.number()
    .min(20, 'Укажите значение от 20')
    .max(500, 'Укажите значение до 500')
    .required('Желаемый вес*'),
});

const AddProdSchema = Yup.object().shape({
  product: Yup.string().required('Обязательное поле *'),
  weight: Yup.number().required('Обязательное поле *'),
});

export { SignupSchema, RegisterSchema, formSchema, AddProdSchema };
