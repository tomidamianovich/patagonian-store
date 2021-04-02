import React from 'react'
import { CircularProgress } from '@material-ui/core';
import styles from './LoadingSpinner.styles'
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';

type Props = {
  isLoading: boolean
} & WithStyles<typeof styles>;

const LoadingSpinner: React.FC<Props> = ({
	classes,
  isLoading
}) => {
  return (
    <div data-testid="loading-spinner">
      {isLoading && <CircularProgress disableShrink className={classes.spinner} />}
    </div>
  )
}

export default withStyles(styles)(LoadingSpinner);