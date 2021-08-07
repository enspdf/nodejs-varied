import { UserIdValueObject } from '../../../user/values-objects';
import { AggregateRoot, UniqueEntityID, Result } from '../../../shared';
import {
  BudgetDescriptionValueObject,
  PercentageValueObject,
} from '../../../budget-box/value-objects';
import { ReasonDomainEntity } from '../../../budget-box/entities';

export interface BudgetBoxAggregateProps {
  ownerId: UserIdValueObject;
  description: BudgetDescriptionValueObject;
  balanceAvailable: number;
  isPercentual: boolean;
  budgetPercentage: PercentageValueObject;
  reasons: ReasonDomainEntity[];
}

export class BudgetBoxAggregate extends AggregateRoot<BudgetBoxAggregateProps> {
  private constructor(props: BudgetBoxAggregateProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  get ownerId(): UserIdValueObject {
    return this.props.ownerId;
  }

  get description(): BudgetDescriptionValueObject {
    return this.props.description;
  }

  get balanceAvailable(): number {
    return this.props.balanceAvailable;
  }

  get isPercentual(): boolean {
    return this.props.isPercentual;
  }

  get budgetPercentage(): PercentageValueObject {
    return this.props.budgetPercentage;
  }

  getReasons(): ReasonDomainEntity[] {
    return this.props.reasons;
  }

  public static create(
    props: BudgetBoxAggregateProps,
    id?: UniqueEntityID,
  ): Result<BudgetBoxAggregate> {
    if (!props.isPercentual && props.budgetPercentage.value < 100) {
      props.budgetPercentage = PercentageValueObject.create(100).getResult();
    }

    return Result.ok<BudgetBoxAggregate>(new BudgetBoxAggregate(props, id));
  }
}
