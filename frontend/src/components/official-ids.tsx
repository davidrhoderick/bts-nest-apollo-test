import {
  IStatesOfficialIds,
  IUpdateStatesOfficialIdsInput,
} from "@bts-api-tests/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function OfficialIds() {
  // TODO get this from useRouter
  const transactionId = "123456";

  // TODO get this from useQuery
  const states: IStatesOfficialIds = [
    {
      state: "HI",
      displayName: "Hawaii",
      officialIds: [
        {
          label: "State Unemployment ID",
          code: "STUN",
          id: "12315123",
        },
      ],
    },
  ];

  const { register, handleSubmit } = useForm<IUpdateStatesOfficialIdsInput>({
    defaultValues: { transactionId, states },
  });

  const onSubmit: SubmitHandler<IUpdateStatesOfficialIdsInput> = (formData) => {
    console.log("transactionId", formData.transactionId);
    console.log("officialIds", formData.states);

    // TODO submit with useMutation
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("transactionId")} />
      {states.map(({ displayName, state, officialIds }, stateIndex) => (
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
      ))}

      <button type="submit">Continue</button>
    </form>
  );
}
