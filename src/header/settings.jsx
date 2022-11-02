import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, FormControlLabel, Switch, Tooltip } from '@mui/material';
import React from 'react'
import { AiOutlineSetting } from "react-icons/ai";
import EditorContext from "../components/code-editor/provider";

const Settings = () => {
  const { darktheme, setDarkTheme } = React.useContext(EditorContext);
  const { cmeditor, setCmeditor } = React.useContext(EditorContext);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  const toggleEditor = () => {
    setCmeditor(!cmeditor);
  };
  const toggleTheme = () => {
    setDarkTheme(!darktheme);
  };
  return (
    <>
      <div>
        <Tooltip title="Settings">
          <Button
            ref={anchorRef}
            id="settings-button"
            aria-controls={open ? 'settings-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
          >
            <AiOutlineSetting />
          </Button>
        </Tooltip>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="settings-menu"
                    aria-labelledby="settings-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem>
                      <FormControlLabel
                        control={<Switch checked={darktheme} />}
                        onChange={toggleTheme}
                        label="Dark-theme"
                      />
                    </MenuItem>
                    <MenuItem >
                      <FormControlLabel
                        control={<Switch checked={cmeditor} />}
                        onChange={toggleEditor}
                        label="Use Code Mirror"
                      />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  )
}

export default Settings
