/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './Field.styles';
import { InputAdornment, TextField } from '@mui/material';

/** input props */
interface FieldProps {
  /** 値 */
  value: string;
  /** 値変化時の処理 */
  onChange: (event: any) => void;
  /** フィールドタイプ */
  fieldType?: "text" | "search" | "number" | "password" | "email" | "tel";
  /** フォーカスアウト時の処理 */
  onBlur?: (event: any) => void;
  /** ヘルパーテキスト */
  helperText?: string;
  /** エラー */
  error?: boolean;
  /** プレースホルダー */
  placeholder?: string;
  /** 複数行 */
  multiline?: boolean;
  /** 行数 */
  rows?: number;
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

/** Field compornent for Yazaki Corp. systems */
const Field: React.FC<FieldProps> = ({
  value,
  onChange,
  fieldType = "text",
  onBlur,
  helperText = undefined,
  error = false,
  placeholder = undefined,
  multiline = false,
  rows = 1,
  fullWidth = true,
  disabled = false,
  readOnly = false,
  icon = undefined,
  unit = undefined
}) => {



  return (
    <TextField
      css={[styles.base]}
      value={value}
      onChange={onChange}
      type={fieldType}
      onBlur={onBlur}
      helperText={helperText ?? " "}
      error={error}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      fullWidth={fullWidth}
      disabled={disabled}
      slotProps={{
        input: {
          readOnly: readOnly,
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
        },
      }}
    />
  );
};

export default Field;