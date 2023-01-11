import checkout from "./form";

const {
  formField: {
    passportno,
    name,
    phoneprivate,
    phonemobile,
    email,
    reason,
    companyid,
    companyno,
    cmpcoandar,
    cmpdcandar,
  },
} = checkout;

const initialValues = {
  passportno: "",
  name: "",
  phoneprivate: "",
  phonemobile: "",
  email: "",
  reason: "",
  companyid: "",
  companyno: "",
  cmpcoandar: "",
  cmpdcandar: "",
};

export default initialValues;
