import React from "react";
// MUI
import { Box } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FileOpenIcon from "@mui/icons-material/FileOpen";
// Components
import PdfOptions from "./pdf-options";
import SampleFiles from "./sample-file";
import EditorContext from "../components/code-editor/provider";
import Settings from "./settings";

const Header = () => {
  const { filename, setFilename } = React.useContext(EditorContext);
  const { code, setCode } = React.useContext(EditorContext);

  console.log(code);

  // menu states
  const [anchorfile, setAnchorfile] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElPdf, setAnchorElPdf] = React.useState(null);
  const handleOpenfile = (event) => {
    setAnchorfile(event.currentTarget);
  };
  const handleClosefile = (event) => {
    setFilename(event.target.value);
    setAnchorfile(null);
  };
  const handleNewfile = (event) => {
    setCode(`dd = {
      content: [
        
      ]
    }`);
    setFilename(event.target.innerText);
    setAnchorfile(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setFilename(event.target.value);
    setAnchorElNav(null);
  };
  const handleOpenPdfMenu = (event) => {
    setAnchorElPdf(event.currentTarget);
  };
  const handleClosePdfMenu = () => {
    setAnchorElPdf(null);
  };
  return (
    <div className="header">
      <div className="header_logo">
        <a href="/">Back2dev</a>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar disableGutters style={{ minHeight: "48px", maxHeight: "48px" }}>
            <Box sx={{ flexGrow: 0 }} ml="15px">
              <Tooltip title="File Options">
                <Button
                  size="large"
                  onClick={handleOpenfile}
                  color="inherit"
                  variant="text"
                >
                  <FileOpenIcon />
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorfile}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorfile)}
                onClose={handleClosefile}
              >
                <MenuItem onClick={handleNewfile}>
                  <Typography textAlign="center">New File</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="sample-files"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                data-cy="nav-button"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "flex", md: "flex" },
                  direction: "column",
                  color: "inherit",
                  my: 2,
                }}
              >
                <SampleFiles handleCloseNavMenu={handleCloseNavMenu} />
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
              }}
            >
              <SampleFiles />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", lg: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="pdf-options"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenPdfMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="pdf-menu-appbar"
                anchorEl={anchorElPdf}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElPdf)}
                onClose={handleClosePdfMenu}
                sx={{
                  display: { xs: "flex", md: "none", lg: "none" },
                  direction: "column",
                  color: "inherit",
                  my: 2,
                }}
              >
                <PdfOptions handleClosePdfMenu={handleClosePdfMenu} />
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", lg: "flex" },
              }}
            >
              <PdfOptions />
            </Box>
            <Box mr="15px" id="filename" fontWeight="bold">
              {filename}
            </Box>
            <Box mr="15px" fontWeight="bold">
              <Settings />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
