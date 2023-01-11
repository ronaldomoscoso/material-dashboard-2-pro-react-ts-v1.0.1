// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

// Formik
import { Form, Formik } from "formik";
import initialValues from "../../main/Schemas/initialValues";
import validations from "../../main/Schemas/validations";
import form from "../../main/Schemas/form";
import { Box, Button, FormControl, InputLabel, Select } from "@mui/material";
import BeFormField from "components/BEFormField";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "Contexts/Auth/AuthContext";
function BasicVisitorInfo(): JSX.Element {
  const auth = useContext(AuthContext);
  const [openSearch, setOpenSearch] = useState(false);
  const { formId, formField } = form;

  const handleReset = () => {};
  const handleSubmit = async (values: any) => {};

  const [datacmp, setDataCmp] = useState([]);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        console.log("Carregando as empresas");
        const cmpresponse = await auth.getCompanies("LOADCOMPANY", "geral", "null");
        setDataCmp(cmpresponse);
      } catch (error) {
        console.log("Erro load companies", error);
      }
    };

    loadCompanies();
  });

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleReset,
          handleBlur,
          handleChange,
          enableReinitialize,
        }) => (
          <Form id={formId}>
            <MDBox p={3}>
              <MDTypography variant="h5">Informações da Visita</MDTypography>
            </MDBox>
            <MDBox component="form" pb={3} px={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <BeFormField
                    type={formField.passportno.type}
                    id={formField.passportno.id}
                    label={formField.passportno.label}
                    name={formField.passportno.name}
                    placeholder={formField.passportno.placeholder}
                    value={values.passportno}
                    error={!!errors.passportno}
                    onChange={handleChange}
                    sx={{ width: "20ch" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BeFormField
                    type={formField.name.type}
                    id={formField.name.id}
                    label={formField.name.label}
                    name={formField.name.name}
                    placeholder={formField.name.placeholder}
                    value={values.name}
                    error={!!errors.name}
                    onChange={handleChange}
                    sx={{ width: "50ch" }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    sx={{ bgcolor: "#616161", color: "#ffff", borderColor: "#616161" }}
                    onClick={() => setOpenSearch(true)}
                    variant="outlined"
                    startIcon={<SearchRoundedIcon />}
                  >
                    Pesquisar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <BeFormField
                    type={formField.phoneprivate.type}
                    id={formField.phoneprivate.id}
                    label={formField.phoneprivate.label}
                    name={formField.phoneprivate.name}
                    placeholder={formField.phoneprivate.placeholder}
                    value={values.phoneprivate}
                    error={!!errors.phoneprivate}
                    onChange={handleChange}
                    sx={{ width: "20ch" }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <BeFormField
                    type={formField.phonemobile.type}
                    id={formField.phonemobile.id}
                    label={formField.phonemobile.label}
                    name={formField.phonemobile.name}
                    placeholder={formField.phonemobile.placeholder}
                    value={values.phonemobile}
                    error={!!errors.phonemobile}
                    onChange={handleChange}
                    sx={{ width: "20ch" }}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <BeFormField
                    type={formField.email.type}
                    id={formField.email.id}
                    label={formField.email.label}
                    name={formField.email.name}
                    placeholder={formField.email.placeholder}
                    value={values.email}
                    error={!!errors.email}
                    onChange={handleChange}
                    sx={{ width: "40ch" }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormControl sx={{ ml: 0, pr: 2 }} variant="standard">
                    <InputLabel id="demo-simple-select-filled-label">
                      selecione uma empresa
                    </InputLabel>
                    <Select></Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormControl sx={{ ml: 0, pr: 2 }} variant="standard">
                    <InputLabel id="demo-simple-select-filled-label">selecione um andar</InputLabel>
                    <Select></Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <BeFormField
                    type={formField.reason.type}
                    id={formField.reason.id}
                    label={formField.reason.label}
                    name={formField.reason.name}
                    placeholder={formField.reason.placeholder}
                    value={values.reason}
                    error={!!errors.reason}
                    onChange={handleChange}
                    sx={{ width: "40ch" }}
                  />
                </Grid>
              </Grid>
            </MDBox>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default BasicVisitorInfo;
