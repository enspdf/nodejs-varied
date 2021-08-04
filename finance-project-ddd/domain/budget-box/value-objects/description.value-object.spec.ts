import { DescriptionValueObject } from './description.value-object';

describe('description.value-object', () => {
  it('should create a valid description value object', () => {
    const description = DescriptionValueObject.create('value_description');

    expect(description.isSuccess).toBeTruthy();
  });

  it('should normalize description to lowercase', () => {
    const description = DescriptionValueObject.create('vAlUE_DeSCRIption');

    expect(description.isSuccess).toBeTruthy();
    expect(description.getResult().value).toBe('value_description');
  });

  it('should fail if not provide description', () => {
    const description = DescriptionValueObject.create('');

    expect(description.isFailure).toBeTruthy();
    expect(description.error).toBe(
      'Invalid description length min 1 char and max 30 char',
    );
  });

  it('should fail if provide long description (greater than 30 char)', () => {
    const description = DescriptionValueObject.create(
      'Invalid description length min 1 char and max 30 char',
    );

    expect(description.isFailure).toBeTruthy();
    expect(description.error).toBe(
      'Invalid description length min 1 char and max 30 char',
    );
  });
});
