import { ValueObject } from '../../../shared/value-object';
import { Result } from '../../../shared/result';
import { IpValueObject } from '../ip/ip.value-object';
import { AcceptedAtValueObject } from '../accepted-at/accepted-at.value-object';

export enum IOs {
  LINUX = 'LINUX',
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
  IPHONE = 'IPHONE',
  APPLE = 'APPLE',
  MACINTOSH = 'MACINTOSH',
  ANDROID = 'ANDROID',
  IPAD = 'IPAD',
}

export interface IUserAgent {
  name: string;
  version: string;
  os: keyof typeof IOs;
  type: string;
}

export interface TermValueObjectProps {
  ip: IpValueObject;
  acceptedAt: AcceptedAtValueObject;
  userAgent: IUserAgent;
}

export class TermValueObject extends ValueObject<TermValueObjectProps> {
  private constructor(props: TermValueObjectProps) {
    super(props);
  }

  get value(): TermValueObjectProps {
    return this.props;
  }

  public static create(props: TermValueObjectProps): Result<TermValueObject> {
    const isValidOs = Object.values(IOs).includes(
      props.userAgent.os.toUpperCase() as any,
    );

    if (!isValidOs) {
      return Result.fail<TermValueObject>('Invalid Os');
    }

    return Result.ok<TermValueObject>(new TermValueObject(props));
  }
}