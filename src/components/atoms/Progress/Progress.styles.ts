import { css } from "@emotion/react";
import { circularProgressClasses, linearProgressClasses } from "@mui/material";

/** applied style */
export const styles = {
  base: css({
    /** base style */
    fontFamily: [
      'Roboto',
      '"Noto Sans JP"',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(','),
  }),
  linear: css({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#eeeeee',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    },
  }),
  circularBack: css({
    color: '#eeeeee',
  }),
  circularFront: css({
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
    [`& .${circularProgressClasses.circle}`]: {
      strokeLinecap: 'round',
    },
  }),
  primary: css({
    /** カラー：プライマリー */
    color: '#2196f3',
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#2196f3',
    },
  }),
  secondary: css({
    /** カラー：セカンダリー */
    color: '#e91e63',
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#e91e63',
    },
  }),
  tertiary: css({
    /** カラー：ターシャリー */
    color: '#009688',
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#009688',
    },
  }),
  error: css({
    /** カラー：エラー */
    color: '#f44336',
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#f44336',
    },
  }),
  'linear-small': css({
    '& .MuiGrid2-root': {
      minWidth: '300',
    },
  }),
  'linear-medium': css({
    '& .MuiGrid2-root': {
      minWidth: '500',
    },
  }),
  'linear-large': css({
    '& .MuiGrid2-root': {
      minWidth: '700',
    },
  }),
  'circular-small': css({
    '& .MuiGrid2-root': {
      minWidth: '300',
    },
  }),
  'circular-medium': css({
    '& .MuiGrid2-root': {
      minWidth: '500',
    },
  }),
  'circular-large': css({
    '& .MuiGrid2-root': {
      minWidth: '700',
    },
  }),
}