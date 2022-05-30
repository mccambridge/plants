// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Nursery = {
  "SEANSPLANTS": "SEANSPLANTS",
  "PTPLANTS": "PTPLANTS",
  "FRIENDLYPLANTS": "FRIENDLYPLANTS"
};

const PlantStatus = {
  "AVAILABLE": "AVAILABLE",
  "CHECKEDOUT": "CHECKEDOUT"
};

const { Plant, Member } = initSchema(schema);

export {
  Plant,
  Member,
  Nursery,
  PlantStatus
};