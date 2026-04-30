import { api } from './client';

export interface ContactPayload {
  name?: string;
  email: string;
  message: string;
  contactType: 'say-hi' | 'get-quote';
}

export async function sendContact(payload: ContactPayload) {
  const response = await api.post('/contact', payload);
  return response.data;
}
