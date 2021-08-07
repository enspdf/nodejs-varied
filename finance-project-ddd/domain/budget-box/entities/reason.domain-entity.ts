import { BaseDomainEntity, Entity, Result, UniqueEntityID } from '../../shared';
import { ReasonDescriptionValueObject } from '../value-objects';

export interface ReasonDomainEntityProps extends BaseDomainEntity {
  description: ReasonDescriptionValueObject;
}

export class ReasonDomainEntity extends Entity<ReasonDomainEntityProps> {
  private constructor(props: ReasonDomainEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get description(): ReasonDescriptionValueObject {
    return this.props.description;
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  public static create(
    props: ReasonDomainEntityProps,
    id?: UniqueEntityID,
  ): Result<ReasonDomainEntity> {
    return Result.ok<ReasonDomainEntity>(new ReasonDomainEntity(props, id));
  }
}
