import React, { useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper } from '@mui/material';
import Label from '../../../components/atoms/Label';
import DateCalendar from '../../../components/atoms/DateCalendar';
import Dropdown from '../../../components/atoms/Dropdown';
import Field from '../../../components/atoms/Field';
import Checkbox from '../../../components/atoms/Checkbox';
import Button from '../../../components/atoms/Button';
import { useNavigate } from '@tanstack/react-router';
import TableCommon from '../../../components/Table/TableCommon';
import { makeDailyOrderDetailTableInstance } from '../../../components/Table/def/DailyOrderDetailColumns';

const DailyOrdersDetail: React.FC = () => {
  const children = "品番・受注別　明細";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productNumber: "XXXXXXX",
    delivery: "",
    factory: "",
    manufacturing: "",
    deliveryDate: new Date().toISOString(),
    updateReason: "",
  });

  // const handleSelectChange = (event: SelectChangeEvent<string>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name!]: value });
  // };

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
      >
        {children}
      </Label>
    </Box>
      {/* body */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} >
          <Grid item xs={3}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="品番"
              placeholder="品番"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid xs={3}>
            <DateCalendar
              helperText="納期"
              maxDate="2024-12-27"
              minDate="2024-11-17"
              onChange={() => { }}
              value={formData.deliveryDate}
            />
          </Grid>
          <Grid xs={3}>
            <DateCalendar
              helperText="内示納期"
              maxDate="2024-12-27"
              minDate="2024-11-17"
              onChange={() => { }}
              value={formData.deliveryDate}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={3}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="数量"
              placeholder="数量"
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={3}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="内示数量"
              placeholder="内示数量"
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="内確差数量"
              placeholder="内確差数量"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="状況"
              placeholder="状況"
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={4}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="備考"
              placeholder="備考"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Checkbox
              checked
              label="BO"
              onCheck={function Ki() { }}
              key={''}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="量産"
              placeholder="量産"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="回路数"
              placeholder="回路数"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="総回路数"
              placeholder="総回路数"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
          <Grid item xs={2}>
            <Field
              onBlur={() => { }}
              onChange={(e: any) => handleChangeSearchParams('productNumber', e.target.value)}
              helperText="初物"
              placeholder="初物"
              disabled={true}
              value={formData.productNumber}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Dropdown
              helperText="更新理由"
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
              value={formData.updateReason} />
          </Grid>
        </Grid>
      </Paper>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Label>
            履歴
          </Label>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <TableCommon tableInstance={makeDailyOrderDetailTableInstance()} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Box mt={2}>
        {/* footer */}
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button
              color="tertiary"
              label="戻る"
              onClick={function Ki() {
                navigate({
                  to: "/mock/daily-orders"
                });
              }}
              variant="contained"
            />
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              label="リセット"
              onClick={function Ki() { }}
              variant="contained"
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              label="保存"
              onClick={function Ki() { }}
              variant="contained"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DailyOrdersDetail;
