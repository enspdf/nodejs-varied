import { EmailValueObject } from './email.value-object';

describe('email-value-object', () => {
  it('should return a valid email', () => {
    const email = EmailValueObject.create('valid-mail@domain.com');

    expect(email.isSuccess).toBeTruthy();
    expect(email.getResult().value).toBe('valid-mail@domain.com');
  });

  it('should return fail if provide an invalid email', () => {
    const email = EmailValueObject.create('invalid-mail');

    expect(email.isFailure).toBeTruthy();
    expect(email.error).toBe('Invalid Email');
  });

  it('should normalize email to lowercase', () => {
    const email = EmailValueObject.create('vaLID_MaIl@DOMain.cOM');

    expect(email.getResult().value).toBe('valid_mail@domain.com');
  });
});
