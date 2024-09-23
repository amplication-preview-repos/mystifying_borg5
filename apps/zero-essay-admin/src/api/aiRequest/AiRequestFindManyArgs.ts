import { AiRequestWhereInput } from "./AiRequestWhereInput";
import { AiRequestOrderByInput } from "./AiRequestOrderByInput";

export type AiRequestFindManyArgs = {
  where?: AiRequestWhereInput;
  orderBy?: Array<AiRequestOrderByInput>;
  skip?: number;
  take?: number;
};
