// @ts-ignore
/* eslint-disable  */
import IDomainEvent from './IDomainEvent';

export default interface IHandle<IDomainEvent> {
  setupSubscriptions(): void;
}

export { IHandle };
