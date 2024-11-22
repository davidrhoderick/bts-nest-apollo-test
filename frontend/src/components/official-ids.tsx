import { useQuery } from "@apollo/client";
import {
  IListStatesOfficialIds,
  IListStatesOfficialIdsArgs,
  IUpdateStatesOfficialIdsInput,
} from "@bts-api-tests/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { LIST_STATES_OFFICIAL_IDS } from "../gql/official-ids";
import { useEffect } from "react";

export default function OfficialIds() {
  // TODO get this from useRouter
  const transactionId = "123456";

  const { data, loading } = useQuery<
    IListStatesOfficialIds,
    IListStatesOfficialIdsArgs
  >(LIST_STATES_OFFICIAL_IDS, { variables: { transactionId } });

  const { reset, register, handleSubmit } =
    useForm<IUpdateStatesOfficialIdsInput>({
      defaultValues: { transactionId, states: data?.listStatesOfficialIds },
    });

  useEffect(() => {
    reset({ transactionId, states: data?.listStatesOfficialIds });
  }, [data?.listStatesOfficialIds, reset]);

  const onSubmit: SubmitHandler<IUpdateStatesOfficialIdsInput> = (formData) => {
    console.log("transactionId", formData.transactionId);
    console.log("officialIds", formData.states);

    // TODO submit with useMutation
  };

  return loading ? (
    "loading"
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("transactionId")} />
      {data?.listStatesOfficialIds?.map(
        ({ displayName, state, officialIds }, stateIndex) => (
          <div key={state}>
            <h1>{displayName}</h1>

            {officialIds.map(({ label, code }, codeIndex) => (
              <div key={`${state}-${code}`}>
                <label htmlFor={`${state}-${code}`}>{label}</label>

                <input
                  {...register(
                    `states.${stateIndex}.officialIds.${codeIndex}.id`
                  )}
                />
              </div>
            ))}
          </div>
        )
      )}

      <button type="submit">Continue</button>
    </form>
  );
}
