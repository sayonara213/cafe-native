import * as Yup from 'yup';
import { REGEXPS } from './regexp';

const password = Yup.string()
  .max(30, 'Too long password')
  .trim()
  .required("Enter user's password")
  .matches(REGEXPS.password, 'Please enter valid password');

const email = Yup.string()
  .max(50, 'Too long email')
  .trim()
  .required("Enter user's email")
  .matches(REGEXPS.email, 'Please enter valid email');

const username = Yup.string()
  .max(30, 'Too long username')
  .trim()
  .required("Enter user's username")
  .matches(REGEXPS.username, 'Please enter valid username');

const phone = Yup.string()
  .max(30, 'Too long phone')
  .trim()
  .required("Enter user's phone")
  .matches(REGEXPS.phone, 'Please enter valid phone');

export const authValidationSchema = Yup.object().shape({
  email: email,
  password: password,
});

export const additionalValidationSchema = Yup.object().shape({
  username: username,
  phone: phone,
});
