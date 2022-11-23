import * as Yup from "yup";

const validations = Yup.object().shape({
  passportno: Yup.string().required("digite número do documento"),
  name: Yup.string().required("digite o nome do visitante"),
  reason: Yup.string().required("digite o motivo da visita"),
  email: Yup.string().email().required("digite um e-mail válido"),
});

export default validations;
