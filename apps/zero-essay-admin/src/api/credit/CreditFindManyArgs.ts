import { CreditWhereInput } from "./CreditWhereInput";
import { CreditOrderByInput } from "./CreditOrderByInput";

export type CreditFindManyArgs = {
  where?: CreditWhereInput;
  orderBy?: Array<CreditOrderByInput>;
  skip?: number;
  take?: number;
};
