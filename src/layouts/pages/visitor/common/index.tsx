import { Card, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import theme from "assets/theme";
import MDBox from "components/MDBox";
import { Item } from "./Item";

interface props {
  image?: string;
}

function VisitorImage({ image }: props): JSX.Element {
  return (
    <Card sx={{ boxShadow: 0, borderRadius: 5, display: "flex" }}>
      <MDBox sx={{ boxShadow: 0, borderRadius: 5 }}>
        <img style={{ margin: 0, padding: 0, width: 100, height: 80 }} src={image}></img>
      </MDBox>
    </Card>
  );
}

export default VisitorImage;
