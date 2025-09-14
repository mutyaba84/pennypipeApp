import api from './api';
export const createCampaign = async (payload: any) => { const r = await api.post('/fundraising/campaigns', payload); return r.data; };
export const getCampaigns = async () => { const r = await api.get('/fundraising/campaigns'); return r.data; };
export const contributeToCampaign = async (campaignId: string, payload: any) => { const r = await api.post(`/fundraising/campaigns/${campaignId}/contribute`, payload); return r.data; };
