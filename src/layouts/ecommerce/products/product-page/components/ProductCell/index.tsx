/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Declaring props types for ProductCell
interface Props {
  image: string;
  name: string;
}

function ProductCell({ image, name }: Props): JSX.Element {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} />
      </MDBox>
      <MDTypography variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );
}

export default ProductCell;
