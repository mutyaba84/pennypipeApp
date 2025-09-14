import api from './api';
export const topUp = async (amount: number) => { const r = await api.post('/wallet/top-up', { amount }); return r.data; };
export const createVirtualCard = async () => { const r = await api.post('/wallet/virtual-card'); return r.data; };
export const getBalance = async (userId: string) => { const r = await api.get(`/wallet/${userId}/balance`); return r.data; };