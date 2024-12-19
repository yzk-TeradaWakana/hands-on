import React, { useState } from 'react';
import { makeDailyOrdersTableInstance } from '../../common/Table/def/DailyOrdersColumns'
import TableCommon from '../../common/Table/TableCommon';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Label from '../../common/atoms/Label/Label';
import Field from '../../common/atoms/Field/Field';
import Dropdown from '../../common/atoms/Dropdown/Dropdown';
import DateCalendar from '../../common/atoms/DateCalendar/DateCalendar';

const DailyOrdersDetail: React.FC = () => {
  const [formData, setFormData] = useState({
    productNumber: "XXXXXXX",
    delivery: "",
    factory: "",
    manufacturing: "",
    deliveryDate: new Date().toISOString(),
  });

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name!]: value });
  };

  const handleChangeSearchParams = (key: string, value: string) => {
    setFormData(prevParams => ({
      ...prevParams,
      [key]: value,
    }));
  };

  return (
    <><Box sx={{ p: 3 }}>
      {/* Header */}
      <Label
        borderColor="primary"
        borderPosition="left"
        variant="h5"
        textAlign='left'
        children="品番明細"
      />
    </Box>
    </>
  );
};

export default DailyOrdersDetail;
