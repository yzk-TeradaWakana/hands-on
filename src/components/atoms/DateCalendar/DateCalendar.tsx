/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './DateCalendar.styles';
import { DatePicker, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Container } from '@mui/material';

/** input props */
interface DateCalendarProps {
  /** 値 */
  value: string;
  /** 値変化時の処理 */
  onChange: (event: any) => void;
  /** ヘルパーテキスト */
  helperText?: string;
  /** エラー */
  error?: boolean;
  /** 選択可能最大日付 */
  maxDate?: string;
  /** 選択可能最小日付 */
  minDate?: string;
  /** 非活性化 */
  disabled?: boolean;
  /** 読み取り専用 */
  readOnly?: boolean;
}

/** DateCalendar compornent for Yazaki Corp. systems */
const DateCalendar: React.FC<DateCalendarProps> = ({
  value,
  onChange,
  helperText,
  error,
  maxDate = dayjs(),
  minDate = dayjs().subtract(1, "month"),
  disabled = false,
  readOnly = false }) => {

  const renderWeekEndPickerDay = (
    props: any
  ) => {
    const switchDayColor = (targetDay: string) => {
      switch (
      targetDay
      ) {
        case '0': // sunday
          return { color: "#f44336" };
        case '6': //saturday
          return { color: "#2196f3" };
        default:
          return {};
      }
    };
    const newPickersDayProps = {
      ...props,
      sx: switchDayColor(props.day.format('d')),
    };
    return <PickersDay {...newPickersDayProps} />;
  };

  return (
    <Container>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={'ja'}
        dateFormats={{ year: 'YYYY年' }}
        localeText={{
          previousMonth: "前月を表示",
          nextMonth: "次月を表示",
        }}
      >
        <DatePicker
          css={[
            styles.base
          ]}
          format="YYYY/MM/DD"
          value={dayjs(value)}
          onChange={onChange}
          maxDate={dayjs(maxDate)}
          minDate={dayjs(minDate)}
          views={["year", "month", "day"]}
          slots={{
            openPickerIcon: CalendarMonthIcon,
            day: renderWeekEndPickerDay
          }}
          slotProps={{
            field: {
              clearable: true,
            },
            calendarHeader: {
              format: 'YYYY年MM月'
            },
            textField: {
              variant: "outlined",
              focused: true,
              error: error,
              helperText: helperText,
            },
          }}
          disabled={disabled}
          readOnly={readOnly}
        />
      </LocalizationProvider>
    </Container>
  );
};

export default DateCalendar;