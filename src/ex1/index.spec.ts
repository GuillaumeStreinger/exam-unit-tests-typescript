import { isRangeAvailable } from './index';

describe("isRangeAvailable", () => {
  it('Retourne True si la plage de date demandées est incluse dans la plage de date disponible', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2024-06-01'), endDate: new Date('2024-06-30') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it('Retourne False si la plage de date demandées commence avant la plage de date disponible', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2023-12-01'), endDate: new Date('2024-06-30') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('Retourne False si la plage de date demandées finis après la plage de date disponible', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2024-06-01'), endDate: new Date('2025-01-01') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('Retourne False si la plage de date demandées est complétement extérieur à la plage de date disponible', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2023-12-01'), endDate: new Date('2023-12-31') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('Retourne True si la plage de date demandées est égale à la plage de date disponible', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

});
