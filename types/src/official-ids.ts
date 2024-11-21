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

export interface IListStatesOfficialIdsArgs {
  transactionId: string;
}

export interface IUpdateStatesOfficialIdsInput {
  transactionId: string;
  states: IStatesOfficialIds;
}

export interface IUpdateStatesOfficialIdsInputVariables {
  updateStatesOfficialIdsInput: IUpdateStatesOfficialIdsInput;
}
