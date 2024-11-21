const removeTypename = (input: unknown): object | unknown => {
  if (Array.isArray(input)) {
    return input.map((item) => removeTypename(item));
  }

  if (input && typeof input === "object") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename, ...rest } = input as Record<string, unknown>;
    return Object.keys(rest).reduce(
      (result, key) => ({
        ...result,
        [key]: removeTypename(rest[key]),
      }),
      {} as Record<string, unknown>
    );
  }

  return input;
};

export default removeTypename;
