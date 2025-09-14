import api from './api';
export const sendMoney = async (payload: any) => {
  const res = await api.post('/p2p/send', payload);
  return res.data;
};
export const requestBillShare = async (payload: any) => {
  const res = await api.post('/billshare', payload);
  return res.data;
};
