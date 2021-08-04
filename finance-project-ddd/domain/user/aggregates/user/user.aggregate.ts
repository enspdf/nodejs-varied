import { Result } from '../../../shared/result';
import { AggregateRoot, UniqueEntityID } from '../../../shared';
import { EmailValueObject } from '../../values-objects/email/email.value-object';
import { PasswordValueObject } from '../../values-objects/password/password.value-object';
import { TermValueObject } from '../../values-objects/terms/term.value-object';

export interface UserAggregateProps {
  email: EmailValueObject;
  password: PasswordValueObject;
  budgetBoxIds?: string[];
  totalBalanceAvailable: number;
  terms: TermValueObject[];
}

export class UserAggregate extends AggregateRoot<UserAggregateProps> {
  private constructor(props: UserAggregateProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get email(): EmailValueObject {
    return this.props.email;
  }

  get password(): PasswordValueObject {
    return this.props.password;
  }

  get budgetBoxIds(): string[] {
    return this.props.budgetBoxIds ?? [];
  }

  get totalBalanceAvailable(): number {
    return this.props.totalBalanceAvailable;
  }

  get terms(): TermValueObject[] {
    return this.props.terms;
  }

  public static create(
    props: UserAggregateProps,
    id?: UniqueEntityID,
  ): Result<UserAggregate> {
    return Result.ok<UserAggregate>(new UserAggregate(props, id));
  }
}
