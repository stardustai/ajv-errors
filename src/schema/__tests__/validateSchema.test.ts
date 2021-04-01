import { validateSchema } from '../validateSchema';
import annotationData from './annotationData.json';

describe('validateSchema', () => {
  it('validate error message', () => {
    // const { valid, errorMessage } = validateSchema(
    //   'point',
    //   'Email',
    // );
    // const { valid, errorMessage } = validateSchema(
    //   { x: null, y: 0 },
    //   'Point',
    // );
    // console.log(errorMessage)
    // if (!valid) {
    //   expect(errorMessage).toMatchSnapshot();
    // }s
  });

  it('validate line is null on ImageDataRecord', () => {
    const { valid, errorMessage } = validateSchema(
      annotationData,
      'Annotation',
    );
    // if (!valid) {
    //   expect(errorMessage).toMatchSnapshot();
    // }
  });
});
