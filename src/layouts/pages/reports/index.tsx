import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Card,
  Grid,
  Icon,
  TextField,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { ReactNode, useState } from "react";
import DatePicker from "react-flatpickr";
import FormField from "../account/components/FormField";
import Data from "./components/data";
import selectData from "./events/selectData";

function ReportPage(): JSX.Element {
  const submitReport = () => {
    alert("ronaldo");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox my={1} sx={{ boxShadow: 2 }}>
          <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
            <MDBox borderRadius="xl">
              <MDBox
                bgColor="info"
                width="max-content"
                px={4}
                pt={0}
                pb={0.5}
                mx="auto"
                mt={-1.375}
                borderRadius="section"
                lineHeight={1}
              >
                <MDTypography
                  variant="caption"
                  color="white"
                  textTransform="uppercase"
                  fontWeight="medium"
                >
                  Período da Pesquisa
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox pt={1} pb={2} textAlign="center">
              <MDBox my={1}>
                <Grid xs={12} px={3} display="flex" justifyContent="flex-start" container>
                  <Grid xs={1}>
                    <MDTypography
                      variant="caption"
                      textTransform="uppercase"
                      fontWeight="medium"
                      justifyContent="flex-start"
                    >
                      Data Inicio:
                    </MDTypography>
                  </Grid>
                  <Grid xs={2}>
                    <Data valuedate={new Date()} />
                  </Grid>
                  <Grid xs={1}>
                    <MDTypography variant="caption" textTransform="uppercase" fontWeight="medium">
                      Data Final:
                    </MDTypography>
                  </Grid>
                  <Grid xs={2}>
                    <Data valuedate={new Date()} />
                  </Grid>
                  <Grid xs={1}>
                    <MDTypography variant="caption" textTransform="uppercase" fontWeight="medium">
                      Tipo:
                    </MDTypography>
                  </Grid>
                  <Grid xs={2}>
                    <Autocomplete
                      id="reporttype"
                      renderInput={(params) => (
                        <TextField {...params} InputLabelProps={{ shrink: true }} />
                      )}
                      defaultValue="Tempo Real"
                      options={selectData.Eventos}
                    />
                  </Grid>
                  <Grid
                    xs={2}
                    display="flex"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDButton variant="gradient" color="info" onClick={submitReport}>
                      <Icon>search</Icon>&nbsp; Pesquisar
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </Card>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ReportPage;
