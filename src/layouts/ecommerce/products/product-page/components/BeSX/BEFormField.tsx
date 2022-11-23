import { Box, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, useField } from "formik";
import { useState } from "react";

interface Props {
  label: string;
  name: string;
  variant?: string;
  value?: any;
  errorMsg?: any;
  [key: string]: any;
}

function BEFormField({
  label,
  name,
  type,
  placeholder,
  variant,
  value,
  errorMsg,
  ...rest
}: Props): JSX.Element {
  return (
    <Box>
      <Field
        {...rest}
        component={TextField}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        variant="standard"
        size="small"
      />
      <Typography component="div" variant="caption" color="error" fontWeight="regular">
        {(<ErrorMessage name={name} />) as any}
      </Typography>
    </Box>
  );
}

export default BEFormField;
