import { css } from "@emotion/react";

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
    ].join(',')
  }),
  primary: css({
    /** カラー：プライマリー */
    color: '#616161',
    '&.Mui-checked': {
      color: '#2196f3',
    },
    '&.Mui-disabled': {
      color: '#bdbdbd',
    }
  }),
  secondary: css({
    /** カラー：セカンダリー */
    color: '#616161',
    '&.Mui-checked': {
      color: '#e91e63',
    },
    '&.Mui-disabled': {
      color: '#bdbdbd',
    }
  }),
  tertiary: css({
    /** カラー：ターシャリー */
    color: '#616161',
    '&.Mui-checked': {
      color: '#009688',
    },
    '&.Mui-disabled': {
      color: '#bdbdbd',
    }
  }),
  error: css({
    /** カラー：エラー */
    color: '#616161',
    '&.Mui-checked': {
      color: '#f44336',
    },
    '&.Mui-disabled': {
      color: '#bdbdbd',
    }
  }),
}
