import { test, expect, request } from '@playwright/test';
import { user } from '../../data/user';
import { extractSoldPets } from '../../utils/petUtils';
import { PetAnalyzer } from '../../utils/PetAnalyzer';

test('Petstore API test', async () => {
  const api = await request.newContext({
    baseURL: 'https://petstore.swagger.io/v2'
  });

  const create = await api.post('/user', { data: user });
  expect(create.ok()).toBeTruthy();

  const res = await api.get(`/user/${user.username}`);
  const data = await res.json();
  expect(data.username).toBe(user.username);

  const petsRes = await api.get('/pet/findByStatus?status=sold');
  const pets = await petsRes.json();

  const soldPets = extractSoldPets(pets);
  console.log('Sold pets sample:', soldPets.slice(0, 5));

  const analyzer = new PetAnalyzer(soldPets);
  const result = analyzer.countSameNames();
  console.log('Name frequency:', result);

  expect(Array.isArray(soldPets)).toBeTruthy();
});