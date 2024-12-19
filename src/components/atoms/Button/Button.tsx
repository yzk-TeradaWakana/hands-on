/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';
import { styles } from './Button.styles';

/** input props */
interface ButtonProps {
  /** ラベル */
  label: string;
  /** ボタンクリック時の処理 */
  onClick: () => void;
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
  /** バリアント */
  variant?: "contained" | "outlined";
  /** 非活性化 */
  disabled?: boolean;
  /** 左側アイコン */
  startIcon?: React.ReactElement;
  /** 右側アイコン */
  endIcon?: React.ReactElement;
  /** 子要素 */
  children?: ReactNode;
}

/** Button compornent for Yazaki Corp. systems */
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
  children,
  startIcon,
  endIcon }) => {
  return (
    <MuiButton
      css={[styles.base, styles[`${color}-${variant}`]]}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}>
      {label}
      {children}
    </MuiButton>
  );
};

export default Button;