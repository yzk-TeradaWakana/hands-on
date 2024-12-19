import { css } from "@emotion/react";

/** applied style */
export const styles = {
  base: css({
    /** base style */
    fontWeight: 'bold',
    cursor: 'pointer',
  }),
  'primary-contained': css({
    /** プライマリー_塗りつぶし */
    backgroundColor: '#2196f3',
    color: '#FFFFFF',
    border: "1px solid #2196f3",
    '&:hover': {
      backgroundColor: '#1976d2',
    },
    '&:disabled': {
      backgroundColor: '#bdbdbd',
      color: '#FFFFFF',
      border: "1px solid #bdbdbd",
    }
  }),
  'primary-outlined': css({
    /** プライマリー_輪郭 */
    backgroundColor: '#FFFFFF',
    color: '#2196f3',
    border: "1px solid #2196f3",
    '&:hover': {
      backgroundColor: '#bbdefb',
    },
    '&:disabled': {
      backgroundColor: '#FFFFFF',
      color: '#bdbdbd',
      border: "1px solid #bdbdbd",
    }
  }),
  'secondary-contained': css({
    /** セカンダリー_塗りつぶし */
    backgroundColor: '#e91e63',
    color: '#FFFFFF',
    border: "1px solid #e91e63",
    '&:hover': {
      backgroundColor: '#c2185b',
    },
    '&:disabled': {
      backgroundColor: '#bdbdbd',
      color: '#FFFFFF',
      border: "1px solid #bdbdbd",
    }
  }),
  'secondary-outlined': css({
    /** セカンダリー_輪郭 */
    backgroundColor: '#FFFFFF',
    color: '#e91e63',
    border: "1px solid #e91e63",
    '&:hover': {
      backgroundColor: '#f8bbd0',
    },
    '&:disabled': {
      backgroundColor: '#FFFFFF',
      color: '#bdbdbd',
      border: "1px solid #bdbdbd",
    }
  }),
  'tertiary-contained': css({
    /** ターシャリー_塗りつぶし */
    backgroundColor: '#009688',
    color: '#FFFFFF',
    border: "1px solid #009688",
    '&:hover': {
      backgroundColor: '#00796b',
    },
    '&:disabled': {
      backgroundColor: '#bdbdbd',
      color: '#FFFFFF',
      border: "1px solid #bdbdbd",
    }
  }),
  'tertiary-outlined': css({
    /** ターシャリー_輪郭 */
    backgroundColor: '#FFFFFF',
    color: '#009688',
    border: "1px solid #009688",
    '&:hover': {
      backgroundColor: '#b2dfdb',
    },
    '&:disabled': {
      backgroundColor: '#FFFFFF',
      color: '#bdbdbd',
      border: "1px solid #bdbdbd",
    }
  }),
  'error-contained': css({
    /** エラー_塗りつぶし */
    backgroundColor: '#f44336',
    color: '#FFFFFF',
    border: "1px solid #f44336",
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    '&:disabled': {
      backgroundColor: '#bdbdbd',
      color: '#FFFFFF',
      border: "1px solid #bdbdbd",
    }
  }),
  'error-outlined': css({
    /** エラー_輪郭 */
    backgroundColor: '#FFFFFF',
    color: '#f44336',
    border: "1px solid #f44336",
    '&:hover': {
      backgroundColor: '#ffcdd2',
    },
    '&:disabled': {
      backgroundColor: '#FFFFFF',
      color: '#bdbdbd',
      border: "1px solid #bdbdbd",
    }
  }),
}