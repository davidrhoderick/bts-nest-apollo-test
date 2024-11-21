import { gql, useQuery } from '@apollo/client';
import { IListLossHistoryEntriesArgs, ILossHistoryEntry } from '@bts-api-tests/types';

const LIST_LOSS_HISTORY_ENTRIES = gql`
  query listLossHistoryEntries($transactionId: String!) {
    listLossHistoryEntries (transactionId: $transactionId) {
      carrier
      endDate
      id
      startDate
    }
  }

`;

function App() {
  const { data, loading, error } = useQuery<Array<ILossHistoryEntry>, IListLossHistoryEntriesArgs>(LIST_LOSS_HISTORY_ENTRIES, { variables: { transactionId: '12312512' } })

  return (
    <>
      {loading ? 'loading' :
        <code>{JSON.stringify(data, undefined, 2)}</code>}

      <code>
        {error && JSON.stringify(error, undefined, 2)}</code>
    </>
  )
}

export default App
