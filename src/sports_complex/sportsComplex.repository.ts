import { Injectable } from '@nestjs/common';
import { SportsComplexEntity } from './sportsComplex.entity';

@Injectable()
export class SportsComplexRepository {
  private sportsComplex: SportsComplexEntity[] = [];

  async save(sportComplex: SportsComplexEntity) {
    this.sportsComplex.push(sportComplex);
  }

  async getAll(): Promise<SportsComplexEntity[]> {
    return this.sportsComplex;
  }

  async findById(id: string): Promise<SportsComplexEntity | null> {
    return (
      this.sportsComplex.find((sportComplex) => sportComplex.id === id) || null
    );
  }

  async update(
    id: string,
    newData: Partial<SportsComplexEntity>,
  ): Promise<SportsComplexEntity | null> {
    const sportComplex = await this.findById(id);
    if (!sportComplex) {
      throw new Error('Complexo esportivo não encontrado');
    }

    Object.entries(newData).forEach(([key, value]) => {
      if (key !== 'id') {
        sportComplex[key] = value;
      }
    });

    return sportComplex;
  }

  async delete(id: string): Promise<void> {
    const sportComplexIndex = this.sportsComplex.findIndex(
      (sportComplex) => sportComplex.id === id,
    );
    if (sportComplexIndex === -1) {
      throw new Error('Complexo esportivo não encontrado');
    }

    this.sportsComplex.splice(sportComplexIndex, 1);
  }
}
