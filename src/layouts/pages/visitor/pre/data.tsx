import { Card, Grid } from "@mui/material";
import boxShadow from "assets/theme/functions/boxShadow";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Form, Formik } from "formik";
import FormField from "layouts/pages/account/components/FormField";
import validations from "layouts/pages/users/new-user/schemas/validations";
import { Item } from "../common/Item";
import initialValues from "./Schemas/initialValues";
import form from "./Schemas/form";
import { useState } from "react";
import BEFormField from "layouts/ecommerce/products/product-page/components/BeSX/BEFormField";
import MDButton from "components/MDButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function DataVisitor(): JSX.Element {
  const [formValues, setformValues] = useState(initialValues);
  const { formId, formField } = form;

  //#region Events
  const handleSearchSubmit = async () => {
    try {
      alert("ronaldo");
    } catch (error) {}
  };
  //#endregion

  return (
    <Card sx={{ boxShadow: 0, borderRadius: 5 }}>
      <MDBox sx={{ boxShadow: 0, borderRadius: 5, textAlign: "flex-start" }}>
        <MDTypography variant="h5">Dados Visitante</MDTypography>
      </MDBox>
      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={() => {
          alert("ronaldo");
        }}
        enableReinitialize={true}
      >
        {({ values, errors, handleChange, enableReinitialize }) => (
          <Form id={formId}>
            <MDBox mt={3}>
              <Grid container spacing={5}>
                <Grid item xs={2} display="flex">
                  <Item sx={{ boxShadow: 0, verticalAlign: "center" }}>
                    <BEFormField
                      type={formField.passportno.type}
                      id={formField.passportno.id}
                      label={formField.passportno.label}
                      name={formField.passportno.name}
                      placeholder={formField.passportno.placeholder}
                      value={values.passportno}
                      error={!!errors.passportno}
                      onChange={handleChange}
                      sx={{ width: "15ch" }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={10}>
                  <Item sx={{ boxShadow: 0 }}>
                    <BEFormField
                      type={formField.name.type}
                      id={formField.name.id}
                      label={formField.name.label}
                      name={formField.name.name}
                      placeholder={formField.name.placeholder}
                      error={!!errors.name}
                      value={values.name}
                      onChange={handleChange}
                      sx={{ width: "70ch" }}
                    />
                    <MDBox display="flex" justifyContent="flex-end" sx={{ ml: 3 }}>
                      <MDButton variant="gradient" color="dark" onClick={handleSearchSubmit}>
                        <SearchRoundedIcon />
                        Pesquisar
                      </MDButton>
                    </MDBox>{" "}
                  </Item>
                </Grid>
              </Grid>
            </MDBox>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default DataVisitor;
