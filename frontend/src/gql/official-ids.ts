import { gql } from "@apollo/client";

export const LIST_STATES_OFFICIAL_IDS = gql`
  query listStatesOfficialIds($transactionId: String!) {
    listStatesOfficialIds(transactionId: $transactionId) {
      state
      displayName
      officialIds {
        label
        code
        id
      }
    }
  }
`;
