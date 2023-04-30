import * as yup from 'yup';
import type { InferType } from 'yup';
import { genderCodes } from '../constants/genderCodes';

export const ValidFormSchema = yup.object({
  username: yup.string().required('Username is required'),
  zipcode: yup.string().max(7).matches(/\d{7}/, 'Zipcode must be 7 digits'),
  gender: yup.string().oneOf(Object.keys(genderCodes)), // 'f' | 'm' | 'n'
  isAgreed: yup.boolean().oneOf([true], 'You must agree to the terms'),
});

export type ValidFormSchemaType = InferType<typeof ValidFormSchema>;
