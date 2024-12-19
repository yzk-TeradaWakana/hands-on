/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './Radio.styles';
import MuiRadio from '@mui/material/Radio';
import { FormControlLabel } from '@mui/material';


/** input props */
interface RadioProps {
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

/** Radio compornent for Yazaki Corp. systems */
const Radio: React.FC<RadioProps> = ({
  checked = false,
  onCheck = undefined,
  label = "",
  color = "primary",
  disabled = false }) => {
  return (

    <FormControlLabel
      control={
        <MuiRadio
          css={[
            styles.base,
            styles[`${color}`]
          ]}
          checked={checked}
          onChange={onCheck}
          disabled={disabled}
        >
        </MuiRadio>
      }
      label={label}
    >
    </FormControlLabel>

  );
};

export default Radio;