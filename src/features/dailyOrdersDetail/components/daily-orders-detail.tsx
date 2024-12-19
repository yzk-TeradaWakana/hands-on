import React, { useState } from 'react';

import { Box, Grid, SelectChangeEvent, } from '@mui/material';
import Label from '../../../components/atoms/Label';

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
        children="品番・受注別　明細"
      />
    </Box>
    </>
  );
};

export default DailyOrdersDetail;
