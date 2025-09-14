import api from './api';
export const convertCurrency = async (from: string, to: string, amount: number) => { const r = await api.get('/fx/convert', { params: { from, to, amount } }); return r.data; };
export const getRates = async () => { const r = await api.get('/fx/rates'); return r.data; };