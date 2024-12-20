import React, { useState } from 'react';
import { makeOrderEntryTableInstance } from '../../../components/Table/def/OrderEntryColumns'
import TableCommon from '../../../components/Table/TableCommon';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField } from '@mui/material';
import Label from '../../../components/atoms/Label';

const OrderEntry: React.FC = () => {
  const children = "注連登録";
  const [formData, setFormData] = useState({
    orderDate: "",
    customerCode: "",
    customerName: "得意先名",
    orderNo: "自動採番番号",
    businessOffice: "",
    businessDept: "",
    businessPerson: "",
    factory: "",
    factoryDept: "",
    factoryPerson: "",
    issueDate: "自動採番日付",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name!]: value });
  };

  const handleSubmit = async () => {
    try {
      // const response = await axios.post("/api/register", formData);
      // console.log("Response: ", response.data);
      alert("登録が成功しました！");
    } catch (error) {
      console.error("Error: ", error);
      alert("登録に失敗しました。");
    }
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
      {/* Input Form */}
      <Paper sx={{ p: 2, mb: 2, mt: 2 }}>
        <Grid container spacing={2} >
          <Grid item xs={4}><TextField fullWidth name="orderDate" label="受注日" type="date" InputLabelProps={{ shrink: true }} onChange={handleInputChange} /></Grid>
          <Grid item xs={4}><FormControl fullWidth><InputLabel>得意先コード</InputLabel><Select name="customerCode" onChange={handleSelectChange}><MenuItem value={1}>コード1</MenuItem></Select></FormControl></Grid>
          <Grid item xs={4}><TextField fullWidth name="customerName" label="得意先名" value={formData.customerName} InputProps={{ readOnly: true }} /></Grid>

          <Grid item xs={4}><TextField fullWidth name="orderNo" label="注連No" value={formData.orderNo} InputProps={{ readOnly: true }} /></Grid>
          <Grid item xs={4}><FormControl fullWidth><InputLabel>営業事業所</InputLabel><Select name="businessOffice" onChange={handleSelectChange}><MenuItem value={1}>事業所1</MenuItem></Select></FormControl></Grid>
          <Grid item xs={4}><FormControl fullWidth><InputLabel>営業部署</InputLabel><Select name="businessDept" onChange={handleSelectChange}><MenuItem value={1}>部署1</MenuItem></Select></FormControl></Grid>

          <Grid item xs={4}><FormControl fullWidth><InputLabel>営業担当者</InputLabel><Select name="businessPerson" onChange={handleSelectChange}><MenuItem value={1}>担当者1</MenuItem></Select></FormControl></Grid>
          <Grid item xs={4}><FormControl fullWidth><InputLabel>工場</InputLabel><Select name="factory" onChange={handleSelectChange}><MenuItem value={1}>工場1</MenuItem></Select></FormControl></Grid>
          <Grid item xs={4}><FormControl fullWidth><InputLabel>工場部署</InputLabel><Select name="factoryDept" onChange={handleSelectChange}><MenuItem value={1}>工場部署1</MenuItem></Select></FormControl></Grid>

          <Grid item xs={4}><FormControl fullWidth><InputLabel>工場担当者</InputLabel><Select name="factoryPerson" onChange={handleSelectChange}><MenuItem value={1}>担当者1</MenuItem></Select></FormControl></Grid>
          <Grid item xs={4}><TextField fullWidth name="issueDate" label="発行日" value={formData.issueDate} InputProps={{ readOnly: true }} /></Grid>
          <Grid item xs={4}></Grid>

        </Grid>
      </Paper>

      <div>
        <TableCommon tableInstance={makeOrderEntryTableInstance()} />
      </div>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>登録</Button>
      </Grid>
    </Box>
    </>
  );
};

export default OrderEntry;
