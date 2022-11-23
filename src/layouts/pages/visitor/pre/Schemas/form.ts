const form = {
  formId: "VisitorForm",
  formField: {
    passportno: {
      name: "passportno",
      id: "passportno",
      label: "n. documento",
      type: "text",
      errorMsg: "digite o número do documento",
      placeholder: "digite o número do documento",
    },
    name: {
      name: "name",
      id: "name",
      label: "nome do visitante",
      type: "text",
      errorMsg: "digite o nome do visitante",
      placeholder: "digite o nome do visitante",
    },
    phoneprivate: {
      name: "phoneprivate",
      id: "phoneprivate",
      label: "telefone",
      type: "text",
      errorMsg: "digite o n. do telefone",
      placeholder: "digite o n. do telefone",
    },
    phonemobile: {
      name: "phonemobile",
      id: "phonemobile",
      label: "telefone celular",
      type: "text",
      errorMsg: "digite o n. do telefone celular",
      placeholder: "digite o n. do telefone celular",
    },
    email: {
      name: "email",
      id: "email",
      label: "e-mail",
      type: "text",
      errorMsg: "digite o e-mail",
      placeholder: "digite o e-mail",
    },
    reason: {
      name: "reason",
      id: "reason",
      label: "motivo da visita",
      type: "text",
      errorMsg: "digite o motivo da visita",
      placeholder: "digite o motivo da visita",
    },
    companyid: {
      name: "companyid",
    },
    companyno: {
      name: "companyno",
    },
    cmpcoandar: {
      name: "cmpcoandar",
    },
    cmpdcandar: {
      name: "cmpdcandar",
    },
  },
};

export default form;
