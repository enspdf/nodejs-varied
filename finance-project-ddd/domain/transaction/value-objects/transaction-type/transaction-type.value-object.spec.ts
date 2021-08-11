import { TransactionTypeValueObject } from './transaction-type.value-object';

describe('transaction-type.value-object', () => {
  it('should create a valid transaction-type', () => {
    const result = TransactionTypeValueObject.create('ENTRADA');

    expect(result.isSuccess).toBeTruthy();
  });

  it('should fail if provide an invalid transaction-type as string', () => {
    const result = TransactionTypeValueObject.create('INVALID_TYPE' as any);

    expect(result.isSuccess).toBeFalsy();
    expect(result.error).toBe('Invalid option');
  });
});
