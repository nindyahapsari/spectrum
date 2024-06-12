/* eslint-disable indent */
import * as yup from 'yup';

export const userBillSchema = yup.object({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  email: yup.string().email('Invalid email').required('Email is required'),
  userName: yup.string().required('User Name is required'),
});

export const cardPaymentSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  cardNumber: yup
    .string()
    .required('Card Number is required')
    .length(16, 'Card Number should be exactly 16 digits'),
  expiryDate: yup
    .string()
    .required('Expiry Date is required')
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      'Expiry Date should be in the format MM/YY or MM/YYYY'
    ),
  cvv: yup.string().required('CVV is required'),
});
