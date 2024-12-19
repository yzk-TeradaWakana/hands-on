/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './DateForm.styles';
import { FormControl, Grid2 } from '@mui/material';
import DateCalendar from '../../atoms/DateCalendar';
import Label from '../../atoms/Label';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

/** input props */
interface DateFormProps {
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
  /** ヘルパーテキスト */
  helperText?: string;
  /** 選択可能最大日付 */
  maxDate?: string;
  /** 選択可能最小日付 */
  minDate?: string;
  /** 非活性化 */
  disabled?: boolean;
  /** 読み取り専用 */
  readOnly?: boolean;
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
}

/** DateForm compornent for Yazaki Corp. systems */
const DateForm: React.FC<DateFormProps> = ({
  formLabel,
  formLabelPosition = "left",
  required = false,
  error = false,
  value = "",
  onChange,
  helperText = undefined,
  maxDate,
  minDate,
  disabled = false,
  readOnly = false,
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
          <DateCalendar
            value={value}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            helperText={helperText}
            error={error}
            disabled={disabled}
            readOnly={readOnly}
          >
          </DateCalendar>
        </FormControl>
      </Grid2>
    </Grid2 >
  );
};

export default DateForm;