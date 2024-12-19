/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './Checkbox.styles';
import MuiCheckbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

/** input props */
interface CheckboxProps {
  /** キー */
  key: string | number;
  /** チェック状態 */
  checked: boolean;
  /** チェック時の処理 */
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** ラベル */
  label?: string;
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
  /** 非活性化 */
  disabled?: boolean;
}

/** Checkbox compornent for Yazaki Corp. systems */
const Checkbox: React.FC<CheckboxProps> = ({
  key,
  checked,
  onCheck,
  label = "",
  color = "primary",
  disabled = false
}) => {
  return (
    <FormControlLabel
      key={key}
      label={label}
      control={
        <MuiCheckbox
          css={[styles.base, styles[`${color}`]]}
          checked={checked}
          onChange={onCheck}
          name={String(key)}
        >
        </MuiCheckbox>
      }
      disabled={disabled}
    >
    </FormControlLabel>

  );
};

export default Checkbox;