import { OrderDetail } from "../models/OrderDetail";


export const fakeData: OrderDetail[] = [
  {
    deliveryDate: "2024/12/01",
    quantity: 5,
    delivery: "suzuki",
    factory: "裾野製作所",
    manufacturing: "xxxxxxxxxxx",
    backorder: "〇",
    status: "状況",
    note: "備考",
    updateReason: "受注取込",
    updateData: "2024/11/01"
  },
  {
    deliveryDate: "2025/01/02",
    quantity: 1000,
    delivery: "suzuki",
    factory: "裾野製作所",
    manufacturing: "xxxxxxxxxxx",
    backorder: "",
    status: "状況2",
    note: "備考2",
    updateReason: "営業調整",
    updateData: "2024/11/02"
  },
  {
    deliveryDate: "2025/02/01",
    quantity: 1000,
    delivery: "suzuki",
    factory: "裾野製作所",
    manufacturing: "xxxxxxxxxxx",
    backorder: "",
    status: "xxxxxxxxxxx",
    note: "xxxxxxxxxxx",
    updateReason: "納期調整",
    updateData: "2024/11/07"
  },
];