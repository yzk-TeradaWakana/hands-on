/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './FieldForm.styles';
import { FormControl, Grid2 } from '@mui/material';
import Label from '../../atoms/Label';
import Field from '../../atoms/Field';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

/** input props */
interface FieldFormProps {
  /** フォームラベル */
  formLabel: string;
  /** フォームラベル位置 */
  formLabelPosition?: "left" | "top";
  /** 必須か否か */
  required?: boolean;
  /** エラー */
  error?: boolean;
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
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
}

/** FieldForm compornent for Yazaki Corp. systems */
const FieldForm: React.FC<FieldFormProps> = ({
  formLabel,
  formLabelPosition = "left",
  required = false,
  error = false,
  value = "",
  onChange,
  onBlur,
  fieldType = "text",
  helperText = undefined,
  placeholder = undefined,
  multiline = false,
  rows = 1,
  fullWidth = false,
  disabled = false,
  readOnly = false,
  icon = undefined,
  unit = undefined,
  color = "primary"
}) => {

  const direction: any = formLabelPosition === "left" ? "row" : "column";
  const alignItems: any = formLabelPosition === "left" ? "center" : "start";

  return (
    <Grid2 container spacing={2} direction={direction} alignItems={alignItems}>
      <Grid2 container spacing={0} direction="row">
        <Grid2 >
          <Label variant="h6" fontColor={error ? "error" : "normal"}>{formLabel}</Label>
        </Grid2>
        {required &&
          <Grid2 >
            <NotificationImportantIcon css={styles[`${error ? "error" : color}`]}></NotificationImportantIcon>
          </Grid2 >}
      </Grid2 >
      <Grid2 >
        <FormControl component={'fieldset'}>
          <Field
            value={value}
            onChange={onChange}
            fieldType={fieldType}
            onBlur={onBlur}
            helperText={helperText}
            error={error}
            placeholder={placeholder}
            multiline={multiline}
            rows={rows}
            fullWidth={fullWidth}
            disabled={disabled}
            readOnly={readOnly}
            icon={icon}
            unit={unit}
          >
          </Field>
        </FormControl>
      </Grid2>
    </Grid2 >
  );
};

export default FieldForm;