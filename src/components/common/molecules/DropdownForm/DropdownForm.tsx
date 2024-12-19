/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './DropdownForm.styles';
import { FormControl, Grid2 } from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Label from '../../atoms/Label';
import Dropdown from '../../atoms/Dropdown';

/** input props */
interface DropdownFormProps {
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
  /** セレクト項目 */
  selectItems: SelectItem[];
  /** 値変化時の処理 */
  onChange: (event: any) => void;
  /** フォーカスアウト時の処理 */
  onBlur?: (event: any) => void;
  /** ヘルパーテキスト */
  helperText?: string;
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

/** セレクト項目 */
type SelectItem = {
  /** ラベル */
  label: string;
  /** 値 */
  value: string;
};

/** DropdownForm compornent for Yazaki Corp. systems */
const DropdownForm: React.FC<DropdownFormProps> = ({
  formLabel,
  formLabelPosition = "left",
  required = false,
  error = false,
  value = "",
  selectItems = [],
  onChange,
  onBlur,
  helperText = undefined,
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
          <Dropdown
            value={value}
            selectItem={selectItems}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
            error={error}
            fullWidth={fullWidth}
            disabled={disabled}
            readOnly={readOnly}
            icon={icon}
            unit={unit}
          >
          </Dropdown>
        </FormControl>
      </Grid2>
    </Grid2 >
  );
};

export default DropdownForm;