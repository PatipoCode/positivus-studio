import { api } from './client';

export async function subscribeNewsletter(email: string) {
  const response = await api.post('/newsletter', { email });
  return response.data;
}
