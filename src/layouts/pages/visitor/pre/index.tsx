import { Box, Grid, Paper, styled } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VisitorImage from "../common";

// Images
import productImage from "assets/images/products/product-11.jpg";
import DataVisitor from "./data";
import boxShadow from "assets/theme/functions/boxShadow";
import { Item } from "../common/Item";
import Footer from "examples/Footer";

const ItemData = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
}));

function PreVisitor(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Pré-Cadastro de Visitantes
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container justifyContent="flex-start" spacing={1}>
            <Grid item xs={1} justifyContent="flex-start">
              <ItemData sx={{ boxShadow: 10, borderRadius: 2 }}>
                <VisitorImage image={productImage} />
              </ItemData>
            </Grid>
            <Grid item xs={6}>
              <ItemData sx={{ boxShadow: 10, borderRadius: 2 }}>
                <DataVisitor />
              </ItemData>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PreVisitor;
