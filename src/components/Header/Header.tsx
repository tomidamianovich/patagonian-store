import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core';
import styles from './Header.styles';
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


type menuOption = {
  text: string,
  path: string
}

type Props = {
  options: menuOption[],
  appName: string
} & WithStyles<typeof styles>;

const Header: React.FC<Props> = ({
	classes,
  options,
  appName
}) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const redirectToLink = (path:string) => {
    const link = `/${path}`
    handleClose()
    history.push(link);
  }
  
  const listMenuItems = options.map((option:menuOption, index) =>
    <MenuItem key={index} onClick={()=>redirectToLink(option.path)}>
      {option.text}
    </MenuItem>
  );

  return (
    <div className={classes.menu}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        { listMenuItems }
      </Menu>
      <span id="store-name">
        { appName }
      </span>
    </div>
  );
}

export default withStyles(styles)(Header);