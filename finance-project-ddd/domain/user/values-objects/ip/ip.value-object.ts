import { ValueObject } from '../../../shared/core/value-object';
import { Result } from '../../../shared/core/result';

const validateIpRegex =
  /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/;

export interface IpValueObjectProps {
  value: string;
}

export class IpValueObject extends ValueObject<IpValueObjectProps> {
  private constructor(props: IpValueObjectProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(ip: string): Result<IpValueObject> {
    const isValid = validateIpRegex.test(ip);

    if (!isValid) {
      return Result.fail<IpValueObject>('Invalid Ip');
    }

    return Result.ok(new IpValueObject({ value: ip }));
  }
}
