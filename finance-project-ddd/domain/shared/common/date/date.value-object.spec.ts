import { DateValueObject } from './date.value-object';

describe('date.value-object', () => {
  it('should create a valid date', () => {
    const acceptedAt = DateValueObject.create(new Date('2020-01-02 10:00:00'));

    expect(acceptedAt.isSuccess).toBeTruthy();
    expect(acceptedAt.getResult().value).toBe('2020-01-02 10:00:00');
  });

  it('should fail if provide an invalid date', () => {
    const acceptedAt = DateValueObject.create('invalid date' as any);

    expect(acceptedAt.isFailure).toBeTruthy();
    expect(acceptedAt.error).toBe('Invalid date');
  });
});
