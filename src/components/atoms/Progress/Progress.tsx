/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './Progress.styles';
import { Box, CircularProgress, CircularProgressProps, Grid2, LinearProgress, LinearProgressProps, Typography } from '@mui/material';

/** input props */
interface ProgressProps {
  /** ラベル */
  label?: string;
  /** タイプ */
  type?: "circular" | "linear";
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
  /** サイズ */
  size?: "small" | "medium" | "large";
  /** 進捗率 */
  progressRate?: number;
}

function FacebookCircularProgress(props: CircularProgressProps & { progColor: "primary" | "secondary" | "tertiary" | "error" },) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress css={[styles.base, styles.circularBack]}
        variant="determinate"
        size={props.size}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress css={[styles.base, styles.circularFront, styles[`${props.progColor}`]]}
        variant="indeterminate"
        disableShrink
        size={props.size}
        thickness={4}
        {...props}
      />
    </Box>
  );
}


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number } & { progColor: "primary" | "secondary" | "tertiary" | "error" },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <FacebookCircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number } & { progColor: "primary" | "secondary" | "tertiary" | "error" },) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress css={[styles.base, styles.linear, styles[`${props.progColor}`]]} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

/** Progress compornent for Yazaki Corp. systems */
const Progress: React.FC<ProgressProps> = ({
  label,
  type = "linear",
  color = "primary",
  size = "medium",
  progressRate }) => {

  const variant: any = size === "small" ? "h5" : size === "medium" ? "h4" : "h3";

  const minWidth: number = size === "small" ? 300 : size === "medium" ? 500 : 700;

  const circularSize: number = size === "small" ? 40 : size === "medium" ? 70 : 100;

  return (

    <React.Fragment>
      {type === "linear" ?
        <Grid2 container spacing={2} direction="column" alignItems="center">
          <Grid2 >
            <Typography variant={variant}>{label}</Typography>
          </Grid2>
          <Grid2 sx={{ minWidth: minWidth }}>
            {progressRate === undefined ? <LinearProgress css={[styles.base, styles.linear, styles[`${color}`]]} />
              : <LinearProgressWithLabel variant={progressRate === undefined ? undefined : "determinate"} value={progressRate} progColor={color} />}
          </Grid2>
        </Grid2>
        :
        <Grid2 container spacing={2} direction="column" alignItems="center">
          <Grid2 >
            <Typography variant={variant}>{label}</Typography>
          </Grid2>
          <Grid2>
            {progressRate === undefined ? <FacebookCircularProgress size={circularSize} progColor={color} />
              : <CircularProgressWithLabel size={circularSize} value={progressRate} progColor={color} />}
          </Grid2>
        </Grid2>}
    </React.Fragment>

  );
};

export default Progress;