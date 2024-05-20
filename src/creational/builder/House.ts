export class House {
  private foundation!: string;
  private structure!: string;
  private roof!: string;
  private interior!: string;

  public setFoundation(foundation: string): void {
    this.foundation = foundation;
  }

  public setStructure(structure: string): void {
    this.structure = structure;
  }

  public setRoof(roof: string): void {
    this.roof = roof;
  }

  public setInterior(interior: string): void {
    this.interior = interior;
  }

  public show(): void {
    console.log(`Foundation: ${this.foundation}`);
    console.log(`Structure: ${this.structure}`);
    console.log(`Roof: ${this.roof}`);
    console.log(`Interior: ${this.interior}`);
  }
}
