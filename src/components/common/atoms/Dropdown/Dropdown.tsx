/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './Dropdown.styles';
import { InputAdornment, MenuItem, TextField } from '@mui/material';

/** input props */
interface DropdownProps {
  /** 値 */
  value: string;
  /** セレクト項目 */
  selectItem: SelectItem[];
  /** 値変化時の処理 */
  onChange: (event: any) => void;
  /** フォーカスアウト時の処理 */
  onBlur?: (event: any) => void;
  /** ヘルパーテキスト */
  helperText?: string;
  /** エラー */
  error?: boolean;
  /** 全幅 */
  fullWidth?: boolean;
  /** 非活性化 */
  disabled?: boolean;
  /** 読み取り専用 */
  readOnly?: boolean;
  /** アイコン */
  icon?: React.ReactElement;
  /** 単位 */
  unit?: string;
}

/** セレクト要素 */
interface SelectItem {
  /** ラベル */
  label: string;
  /** 値 */
  value: string;
}

/** Dropdown compornent for Yazaki Corp. systems */
const Dropdown: React.FC<DropdownProps> = ({
  value,
  selectItem,
  onChange,
  onBlur,
  helperText = undefined,
  error = false,
  fullWidth = true,
  disabled = false,
  readOnly = false,
  icon,
  unit
}) => {
  return (
    <TextField
      css={[styles.base]}
      select
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText ?? " "}
      error={error}
      fullWidth={fullWidth}
      disabled={disabled}
      slotProps={{
        input: {
          readOnly: readOnly,
          startAdornment: (
            <InputAdornment position="start">
              {icon === undefined ? undefined : icon}
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">{unit === undefined ? undefined : unit + '　'}</InputAdornment>,
        },
      }}
    >
      <MenuItem value="">
        <em>選択無し</em>
      </MenuItem>
      {selectItem.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default Dropdown;