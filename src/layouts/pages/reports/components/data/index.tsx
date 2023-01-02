import { Grid } from "@mui/material";
import MDDatePicker from "components/MDDatePicker";

interface Props {
  datetimeformat?: "ptBR" | "US";
  enableTime?: boolean;
  valuedate?: Date;
}

function Data({ datetimeformat, enableTime = false, valuedate }: Props): JSX.Element {
  /*
   * Formata a data.
   */
  const setDateFormat = (enabletime: boolean, type: any) => {
    switch (type) {
      case "ptBR":
        return enabletime ? "d/m/Y H:m" : "d/m/Y";
      case "US":
        return enabletime ? "m/d/Y H:m" : "m/d/Y";
      default:
        return enabletime ? "d/m/Y H:m" : "d/m/Y";
    }
  };

  return (
    <Grid
      xs={12}
      display="flex"
      container
      sx={{
        m: 0,
        p: 0,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        xs={8}
        display="flex"
        sx={{
          m: 0,
          p: 0,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <MDDatePicker
          value={valuedate}
          options={{ dateFormat: setDateFormat(enableTime, datetimeformat) }}
        />
      </Grid>
    </Grid>
  );
}

export default Data;
