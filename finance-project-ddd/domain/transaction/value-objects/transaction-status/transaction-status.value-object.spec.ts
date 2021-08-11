import { TransactionStatusValueObject } from './transaction-status.value-object';

describe('transaction-status.value-object', () => {
  it('should create a valid transaction status', () => {
    const result = TransactionStatusValueObject.create('PENDENTE');

    expect(result.isSuccess).toBeTruthy();
  });

  it('should fail if provide an invalid transaction-status as string', () => {
    const result = TransactionStatusValueObject.create('INVALID_STATUS' as any);

    expect(result.isSuccess).toBeFalsy();
    expect(result.error).toBe('Invalid option');
  });
});
