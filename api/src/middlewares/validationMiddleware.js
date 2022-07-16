import Joi from "joi";
import {
  ADDRESS,
  DOB,
  EMAIL,
  FNAME,
  LNAME,
  PASSWORD,
  PHONE,
  SHORTSTR,
  LONGSTR,
  STATUS,
  joiValidator,
} from "./validationConstant.js";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    dob: DOB,
    phone: PHONE,
    email: EMAIL,
    password: PASSWORD,
    Address: ADDRESS,
  });

  joiValidator(schema, req, res, next);
};

export const loginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: EMAIL,
    password: PASSWORD,
  });

  joiValidator(schema, req, res, next);
};

// category Validation
export const categoryValidation = (req, res, next) => {
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: Joi.string().allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

// category Validation
export const updateCategoryValidation = (req, res, next) => {
  req.body.parentCatId = req.body.parentCatId ? req.body.parentCatId : null;
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    parentCatId: SHORTSTR.allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

//
//payment Validation
export const paymentMethodValidation = (req, res, next) => {
  const schema = Joi.object({
    status: STATUS,
    name: SHORTSTR.required(),
    description: Joi.string().min(3).max(500).allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};

//payment Validation
export const updatePaymentMethodValidation = (req, res, next) => {
  const schema = Joi.object({
    _id: SHORTSTR.required(),
    status: STATUS,
    name: SHORTSTR.required(),
    description: Joi.string().min(3).max(500).allow(null, ""),
  });

  joiValidator(schema, req, res, next);
};
