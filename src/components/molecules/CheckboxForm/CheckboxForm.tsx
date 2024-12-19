/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './CheckboxForm.styles';
import Checkbox from '../../atoms/Checkbox';
import { FormControl, FormGroup, Grid2 } from '@mui/material';
import Label from '../../atoms/Label';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

/** input props */
interface CheckboxFormProps {
  /** フォームラベル */
  formLabel: string;
  /** フォームラベル位置 */
  formLabelPosition?: "left" | "top";
  /** 必須か否か */
  required?: boolean;
  /** エラー */
  error?: boolean;
  /** チェック項目 */
  checkItems: CheckItem[];
  /** チェック時の処理 */
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
}

/** チェックボックス要素 */
type CheckItem = {
  /** 要素ID */
  id: string | number;
  /** 要素名 */
  name?: string;
  /** チェック状態 */
  checked?: boolean;
  /** 非活性化 */
  disabled?: boolean;
};

/** CheckboxForm compornent for Yazaki Corp. systems */
const CheckboxForm: React.FC<CheckboxFormProps> = ({
  formLabel,
  formLabelPosition = "left",
  required = false,
  error = false,
  checkItems,
  onCheck,
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
          <FormGroup>
            {checkItems.map((checkItem) => {
              return (
                <Checkbox
                  key={checkItem.id}
                  label={checkItem.name}
                  checked={checkItem.checked ?? false}
                  disabled={checkItem.disabled ?? false}
                  onCheck={onCheck}
                  color={color}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default CheckboxForm;