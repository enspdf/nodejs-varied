import { ValueObject } from '../../core/value-object';
import { Result } from '../../core/result';

import { format, isDate } from 'date-fns';

export interface DateValueObjectProps {
  value: Date;
}

export class DateValueObject extends ValueObject<DateValueObjectProps> {
  private constructor(props: DateValueObjectProps) {
    super(props);
  }

  get value(): string {
    return format(this.props.value, 'yyyy-MM-dd hh:mm:ss');
  }

  public static create(date: Date): Result<DateValueObject> {
    const isValidDate = isDate(date);

    if (!isValidDate) {
      return Result.fail<DateValueObject>('Invalid date');
    }

    return Result.ok<DateValueObject>(new DateValueObject({ value: date }));
  }
}
