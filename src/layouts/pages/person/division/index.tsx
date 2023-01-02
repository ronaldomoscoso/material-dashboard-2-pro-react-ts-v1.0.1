import { Grid, Paper, styled } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SearchPerson from "../common/search";

const ItemData = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
}));
function ChangeDivision(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Alteração de Divisão
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container justifyContent="flex-start" spacing={1}>
            <Grid item xs={8} display="flex">
              <ItemData sx={{ boxShadow: 10, borderRadius: 2 }}></ItemData>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ChangeDivision;
