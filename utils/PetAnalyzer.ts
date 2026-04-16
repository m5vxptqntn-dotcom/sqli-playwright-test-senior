export class PetAnalyzer {
  constructor(private pets: { id: number; name: string }[]) {}

  countSameNames(): Record<string, number> {
    return this.pets.reduce((acc, pet) => {
      acc[pet.name] = (acc[pet.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}