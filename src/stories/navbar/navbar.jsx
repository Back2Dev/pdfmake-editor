import React from 'react'
import { Box, AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FileOpenIcon from '@mui/icons-material/FileOpen'

import './Navbar.css'

const pages = ["New"];

const files = ["File 1", "File 2", "File 3", "File 4"];


const Navbar = () => {

  const [anchorfile, setAnchorfile] = React.useState(null);

  const handleOpenfile = (event) => {
    setAnchorfile(event.currentTarget);
  };

  const handleClosefile = (event) => {
    document.getElementById("filename").innerHTML = event.target.innerHTML;
    setAnchorfile(null);
  };

  // menu states
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="navbar">
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }} ml="15px">
              <Tooltip title="Open File">
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
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorfile}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorfile)}
                onClose={handleClosefile}
              >
                {files.map((file) => (
                  <MenuItem key={file} onClick={handleClosefile}>
                    <Typography textAlign="center">{file}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  variant="text"
                >
                  {page}
                </Button>
              ))}
            </Box>
          <Box mr='15px' id="filename" fontWeight="bold">
            File name
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar