import Ajv, { ErrorObject } from 'ajv';
import schema from './SCHEMA_JSON.json';
import { Point } from './slots';

export interface ValidationResult {
  valid: boolean;
  errors?: ErrorObject[];
  errorMessage?: string;
}

export type SchemaKeys = keyof typeof schema.definitions;

export const ajv = new Ajv({
  strict: false,
  allErrors: false,
  // strict mode: use allowUnionTypes to allow union type keyword at "#/properties/annotationPath/items" (strictTypes)
  allowUnionTypes: true,
  verbose: true,
  // extendRefs: 'ignore',
  // schemaId: 'auto',
  // schemas: [schemas],
});

// ------------------------
// AjvErrors(ajv, { singleError: true });

ajv.addSchema(schema, 'schema');

export const validateSchema = (
  object: any,
  key: SchemaKeys,
): ValidationResult => {
  const valid = ajv.validate({ $ref: `schema#/definitions/${key}` }, object);
  if (!valid) {
    console.log(ajv.errors?.length, ajv.errors);
    const formatErrorObject = (errorObject: ErrorObject): string => {
      return `${errorObject.message} ${JSON.stringify(
        Object.values(errorObject.params),
      )}`;
    };
    const errorMessage = ajv.errors?.map(e => formatErrorObject(e)).join('\n');
    console.log(errorMessage);
    return {
      valid: false,
      errorMessage,
      errors: ajv.errors ?? undefined,
    };
  }

  return { valid: true };
};
