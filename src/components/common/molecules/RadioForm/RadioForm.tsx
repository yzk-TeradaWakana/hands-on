/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './RadioForm.styles';
import Radio from '../../atoms/Radio';
import { FormControl, Grid2, RadioGroup } from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Label from '../../atoms/Label';

/** input props */
interface RadioFormProps {
  /** フォームラベル */
  formLabel: string;
  /** フォームラベル位置 */
  formLabelPosition?: "left" | "top";
  /** 必須か否か */
  required?: boolean;
  /** エラー */
  error?: boolean;
  /** ラジオ項目 */
  radioItems: RadioItem[];
  /** チェック時の処理 */
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** カラー */
  color?: "primary" | "secondary" | "tertiary" | "error";
}

/** ラジオボタン要素 */
type RadioItem = {
  /** 要素ID */
  id: string | number;
  /** 要素名 */
  name?: string;
  /** チェック状態 */
  checked?: boolean;
  /** 非活性化 */
  disabled?: boolean;
};

/** RadioForm compornent for Yazaki Corp. systems */
const RadioForm: React.FC<RadioFormProps> = ({
  formLabel,
  formLabelPosition = "left",
  required = false,
  error = false,
  radioItems,
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
          <RadioGroup>
            {radioItems.map((radioItem) => {
              return (
                <Radio
                  key={radioItem.id}
                  label={radioItem.name}
                  checked={radioItem.checked ?? false}
                  disabled={radioItem.disabled ?? false}
                  onCheck={onCheck}
                  color={color}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default RadioForm;