import { gql } from "@apollo/client";

export const LIST_LOSS_HISTORY_ENTRIES = gql`
  query listLossHistoryEntries($transactionId: String!) {
    listLossHistoryEntries(transactionId: $transactionId) {
      carrier
      endDate
      id
      startDate
    }
  }
`;

export const UPDATE_LOSS_HISTORY_ENTRIES = gql`
  mutation updateLossHistoryEntries(
    $updateLossHistoryEntriesInput: UpdateLossHistoryEntriesInput!
  ) {
    updateLossHistoryEntries(
      updateLossHistoryEntriesInput: $updateLossHistoryEntriesInput
    ) {
      carrier
      startDate
      endDate
      id
    }
  }
`;
