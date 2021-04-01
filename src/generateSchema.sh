#!/bin/sh
DIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"


cd "$DIR";
rm schema/SCHEMA_JSON.json || true;
../node_modules/.bin/ts-json-schema-generator --path schema/schema.ts > schema/SCHEMA_JSON.json
../node_modules/.bin/prettier --write schema/SCHEMA_JSON.json
echo "generated schema"
