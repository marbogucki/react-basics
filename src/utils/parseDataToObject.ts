export const parseDataToObject: <T extends {}>(data: string) => T = (
  data: string
) => JSON.parse(JSON.stringify(data));
