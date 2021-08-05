import { PercentageValueObject } from './percentage.value-object';

describe('percentage.value-object', () => {
  it('should create a valid percentage', () => {
    const percentage = PercentageValueObject.create(70);

    expect(percentage.isSuccess).toBeTruthy();
    expect(percentage.getResult().value).toBe(70);
  });

  it('should fail if provide a number greater than 100', () => {
    const percentage = PercentageValueObject.create(170);

    expect(percentage.isSuccess).toBeFalsy();
    expect(percentage.error).toBe('Invalid Range Value');
  });

  it('should fail if provide a number less than 0', () => {
    const percentage = PercentageValueObject.create(-1);

    expect(percentage.isSuccess).toBeFalsy();
    expect(percentage.error).toBe('Invalid Range Value');
  });
});
