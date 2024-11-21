import { useMutation, useQuery } from "@apollo/client";
import {
  IListLossHistoryEntriesArgs,
  ILossHistoryEntries,
  IUpdateLossHistoryEntriesInputVariables,
} from "@bts-api-tests/types";
import { useCallback } from "react";
import {
  LIST_LOSS_HISTORY_ENTRIES,
  UPDATE_LOSS_HISTORY_ENTRIES,
} from "./gql/loss-history-entries";

function App() {
  const { data, loading, error } = useQuery<
    ILossHistoryEntries,
    IListLossHistoryEntriesArgs
  >(LIST_LOSS_HISTORY_ENTRIES, { variables: { transactionId: "12312512" } });

  const [updateLossHistoryEntries, { loading: mutationLoading }] = useMutation<
    ILossHistoryEntries,
    IUpdateLossHistoryEntriesInputVariables
  >(UPDATE_LOSS_HISTORY_ENTRIES);

  const mutateHandler = useCallback(() => {
    updateLossHistoryEntries({
      variables: {
        updateLossHistoryEntriesInput: {
          transactionId: "12312512",
          update: [
            {
              startDate: "2023-09-01",
              endDate: "2022-09-01",
              carrier: "Some carrier",
              id: "1251251",
            },
          ],
          create: [
            {
              startDate: "2023-09-01",
              endDate: "2022-09-01",
              carrier: "Some carrier",
            },
          ],
          delete: ["51254123125"],
        },
      },
    });
  }, [updateLossHistoryEntries]);

  return (
    <>
      <h1>Loss History Entries</h1>
      {loading || mutationLoading ? (
        "loading"
      ) : (
        <code>{JSON.stringify(data, undefined, 2)}</code>
      )}

      <code>{error && JSON.stringify(error, undefined, 2)}</code>

      <button onClick={mutateHandler}>Mutate</button>
    </>
  );
}

export default App;
