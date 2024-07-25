import { isRangeAvailable } from './index';

describe("isRangeAvailable", () => {
  it('should return true if the requested range is within the available range', () => {
    const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') };
    const requestedRange = { startDate: new Date('2024-06-01'), endDate: new Date('2024-06-30') };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
});
});
