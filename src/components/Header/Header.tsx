import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Header.styles';
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { Link } from "react-router-dom";


type menuOption = {
  text: string,
  path: string
}

type Props = {
  options: menuOption[]
} & WithStyles<typeof styles>;

const Header: React.FC<Props> = ({
	classes,
  options
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const listMenuItems = options.map((option:menuOption, index) =>
    <MenuItem key={index}>
      <Link to={`/${option.path}`} className={classes.link}>
        {option.text}
      </Link>
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
    </div>
  );
}

export default withStyles(styles)(Header);