import { AcceptedAtValueObject } from '../../values-objects/accepted-at/accepted-at.value-object';
import { EmailValueObject } from '../../values-objects/email/email.value-object';
import { IpValueObject } from '../../values-objects/ip/ip.value-object';
import { PasswordValueObject } from '../../values-objects/password/password.value-object';
import { TermValueObject } from '../../values-objects/terms/term.value-object';
import { UserAggregate } from './user.aggregate';

describe('user.aggregate', () => {
  it('should create a valid user', () => {
    const user = UserAggregate.create({
      email: EmailValueObject.create('valid_mail@domain.com').getResult(),
      password: PasswordValueObject.create('valid_password').getResult(),
      totalBalanceAvailable: 0,
      terms: TermValueObject.create({
        acceptedAt: AcceptedAtValueObject.create(new Date()).getResult(),
        ip: IpValueObject.create('45.192.110.42').getResult(),
        userAgent: {
          name: 'firefox',
          os: 'LINUX',
          type: 'browser',
          version: '80.0.1',
        },
      }).getResult(),
    });

    expect(user.isSuccess).toBeTruthy();
  });
});
