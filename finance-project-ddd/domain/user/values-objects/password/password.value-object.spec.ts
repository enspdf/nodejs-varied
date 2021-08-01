import { PasswordValueObject } from './password.value-object';

describe('password-value-object', () => {
  it('should create a valid password', () => {
    const password = PasswordValueObject.create('123abc');

    expect(password.isSuccess).toBeTruthy();
    expect(password.getResult().value).toBe('123abc');
  });

  it('should fail if password is not on range min 3 char and max 20 char', () => {
    const shorPassword = PasswordValueObject.create('i');

    expect(shorPassword.isFailure).toBeTruthy();
    expect(shorPassword.error).toBe(
      'Password must have min 3 char and max 20 char',
    );

    const longPassword = PasswordValueObject.create(
      'invalid_long_password_to_validate_password_must_have',
    );

    expect(longPassword.isFailure).toBeTruthy();
    expect(longPassword.error).toBe(
      'Password must have min 3 char and max 20 char',
    );
  });
});
