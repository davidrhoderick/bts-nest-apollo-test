export interface IOfficialId {
  label: string;
  code: string;
  id: string;
}

export interface IStateOfficialIds {
  state: string;
  displayName: string;
  officialIds: Array<IOfficialId>;
}

export interface IStatesOfficialIds extends Array<IStateOfficialIds> {}

export interface IListStatesOfficialIds {
  listStatesOfficialIds: IStatesOfficialIds;
}

export interface IListStatesOfficialIdsArgs {
  transactionId: string;
}

export interface IUpdateOfficialId extends Omit<IOfficialId, "label"> {}

export interface IUpdateStateOfficialIds
  extends Omit<IStateOfficialIds, "displayName" | "officialIds"> {
  officialIds: Array<IUpdateOfficialId>;
}

export interface IUpdateStatesOfficialIds
  extends Array<IUpdateStateOfficialIds> {}

export interface IUpdateStatesOfficialIdsInput {
  transactionId: string;
  states: IUpdateStatesOfficialIds;
}

export interface IUpdateStatesOfficialIdsInputVariables {
  updateStatesOfficialIdsInput: IUpdateStatesOfficialIdsInput;
}
