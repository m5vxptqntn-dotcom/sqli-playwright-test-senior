export function extractSoldPets(pets: any[]) {
  return pets.map(pet => ({
    id: pet.id,
    name: pet.name
  }));
}