import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Nursery {
  SEANSPLANTS = "SEANSPLANTS",
  PTPLANTS = "PTPLANTS",
  FRIENDLYPLANTS = "FRIENDLYPLANTS"
}

export enum PlantStatus {
  AVAILABLE = "AVAILABLE",
  CHECKEDOUT = "CHECKEDOUT"
}



type PlantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Plant {
  readonly id: string;
  readonly name: string;
  readonly scientificName: string;
  readonly nursery: Nursery | keyof typeof Nursery;
  readonly status: PlantStatus | keyof typeof PlantStatus;
  readonly memberID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Plant, PlantMetaData>);
  static copyOf(source: Plant, mutator: (draft: MutableModel<Plant, PlantMetaData>) => MutableModel<Plant, PlantMetaData> | void): Plant;
}

export declare class Member {
  readonly id: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly email: string;
  readonly username: string;
  readonly displayName?: string | null;
  readonly Plants?: (Plant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Member, MemberMetaData>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}