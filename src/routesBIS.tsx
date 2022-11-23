import { Settings } from "@mui/icons-material";
import MDAvatar from "components/MDAvatar";
import SignInBasic from "layouts/authentication/sign-in/basic";
import ProfileOverview from "layouts/pages/profile/profile-overview";

// Images
import profilePicture from "assets/images/team-3.jpg";
import PreVisitor from "layouts/pages/visitor/pre";
import MainVisitor from "layouts/pages/visitor/main";

const routesBIS = [
  {
    type: "collapse",
    name: "Visitantes",
    key: "visitor",
    icon: <MDAvatar alt="Visitantes" size="sm" />,
    collapse: [
      {
        name: "Pré-Cadastro",
        key: "visitorqrcode",
        route: "/pages/visitor/pre/previsitor",
        component: <PreVisitor />,
      },
      {
        name: "Visitantes",
        key: "visitorapp",
        route: "/pages/visitor/main/mainvisitor",
        component: <MainVisitor />,
      },
    ],
  },
];

export default routesBIS;
