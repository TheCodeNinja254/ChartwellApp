import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#171717";

export default {
  black,
  background: {
    dark: "#F4F6F8",
    default: colors.common.white,
    paper: colors.common.white,
  },
  primary: {
    contrastText: white,
    dark: "#17693A",
    main: "#22824B",
    light: "#3BAD6C",
    lighter: "#FDFDF5",
  },
  secondary: {
    contrastText: white,
    dark: "#121212",
    main: "#171717",
    light: "#2e2d2d",
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  white: {
    main: white,
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
