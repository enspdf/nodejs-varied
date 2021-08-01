import { ValueObject } from '../../../shared/value-object';
import { Result } from '../../../shared/result';
import { Entity, UniqueEntityID } from '../../../shared';

export class UserIdValueObject extends Entity<any> {
  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  public static create(id?: UniqueEntityID): Result<UserIdValueObject> {
    return Result.ok<UserIdValueObject>(new UserIdValueObject(id));
  }
}
