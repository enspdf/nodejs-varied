import { ReasonDescriptionValueObject } from './reason-description.value-object';

describe('reason-description.value-object', () => {
  it('should create a valid description value object', () => {
    const description =
      ReasonDescriptionValueObject.create('value_description');

    expect(description.isSuccess).toBeTruthy();
  });

  it('should normalize description to lowercase', () => {
    const description =
      ReasonDescriptionValueObject.create('vAlUE_DeSCRIption');

    expect(description.isSuccess).toBeTruthy();
    expect(description.getResult().value).toBe('value_description');
  });

  it('should fail if not provide description', () => {
    const description = ReasonDescriptionValueObject.create('');

    expect(description.isFailure).toBeTruthy();
    expect(description.error).toBe(
      'Invalid description length min 1 char and max 20 char',
    );
  });

  it('should fail if provide long description (greater than 20 char)', () => {
    const description = ReasonDescriptionValueObject.create(
      'Invalid description length min 1 char and max 20 char',
    );

    expect(description.isFailure).toBeTruthy();
    expect(description.error).toBe(
      'Invalid description length min 1 char and max 20 char',
    );
  });
});
