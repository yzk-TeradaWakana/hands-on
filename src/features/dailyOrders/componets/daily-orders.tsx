import React, { useState } from 'react';
import { makeDailyOrdersTableInstance } from '../../../components/Table/def/DailyOrdersColumns'
import TableCommon from '../../../components/Table/TableCommon';
import { Box, Grid, Paper, SelectChangeEvent } from '@mui/material';
import Label from '../../../components/atoms/Label/Label';
import Field from '../../../components/atoms/Field/Field';
import Dropdown from '../../../components/atoms/Dropdown/Dropdown';
import DateCalendar from '../../../components/atoms/DateCalendar/DateCalendar';

const DailyOrders: React.FC = () => {
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
        children="受注一覧（日別）"
      />

      {/* Input Form */}
      <Paper sx={{ p: 2, mb: 2, mt: 2 }}>
        <Grid container spacing={2} >
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="品番"
              placeholder="品番"
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Dropdown
              helperText="納入先"
              onBlur={() => { }}
              onChange={() => { }}
              selectItem={[
                {
                  label: 'label1',
                  value: 'value1'
                },
                {
                  label: 'label2',
                  value: 'value2'
                },
                {
                  label: 'label3',
                  value: 'value3'
                }
              ]}
              value={formData.delivery} />
          </Grid>
          <Grid item xs={2}>
            <Dropdown
              helperText="主管工場"
              onBlur={() => { }}
              onChange={() => { }}
              selectItem={[
                {
                  label: 'label1',
                  value: 'value1'
                },
                {
                  label: 'label2',
                  value: 'value2'
                },
                {
                  label: 'label3',
                  value: 'value3'
                }
              ]}
              value={formData.factory} />
          </Grid>
          <Grid item xs={2}>
            <Dropdown
              helperText="製造場所"
              onBlur={() => { }}
              onChange={() => { }}
              selectItem={[
                {
                  label: 'label1',
                  value: 'value1'
                },
                {
                  label: 'label2',
                  value: 'value2'
                },
                {
                  label: 'label3',
                  value: 'value3'
                }
              ]}
              value={formData.manufacturing} />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid xs={6}>
            <DateCalendar
              helperText="納期"
              maxDate="2024-12-27"
              minDate="2024-11-17"
              onChange={() => { }}
              value={formData.deliveryDate}
            />
          </Grid>
        </Grid>
      </Paper>

      <div>
        <TableCommon tableInstance={makeDailyOrdersTableInstance()} />
      </div>
    </Box>
    </>
  );
};

export default DailyOrders;
