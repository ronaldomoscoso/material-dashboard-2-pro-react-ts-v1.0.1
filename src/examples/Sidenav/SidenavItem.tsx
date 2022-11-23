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

import { ReactNode } from "react";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "examples/Sidenav/styles/sidenavItem";

// Material Dashboard 2 PRO React TS contexts
import { useMaterialUIController } from "context";

// Declaring props types for SidenavCollapse
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
  name: string;
  active?: boolean | string;
  nested?: boolean;
  children?: ReactNode;
  open?: boolean;
  [key: string]: any;
}

function SidenavItem({ color, name, active, nested, children, open, ...rest }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;

  return (
    <>
      <ListItem
        {...rest}
        component="li"
        sx={(theme) => item(theme, { active, color, transparentSidenav, whiteSidenav, darkMode })}
      >
        <MDBox
          sx={(theme: Theme): any =>
            itemContent(theme, {
              active,
              miniSidenav,
              name,
              open,
              nested,
              transparentSidenav,
              whiteSidenav,
              darkMode,
            })
          }
        >
          <ListItemText primary={name} />
          {children && (
            <Icon
              component="i"
              sx={(theme) =>
                itemArrow(theme, { open, miniSidenav, transparentSidenav, whiteSidenav, darkMode })
              }
            >
              expand_less
            </Icon>
          )}
        </MDBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit {...rest}>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Declaring default props for SidenavItem
SidenavItem.defaultProps = {
  color: "info",
  active: false,
  nested: false,
  children: false,
  open: false,
};

export default SidenavItem;
