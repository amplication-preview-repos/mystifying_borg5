import { Credit as TCredit } from "../api/credit/Credit";

export const CREDIT_TITLE_FIELD = "id";

export const CreditTitle = (record: TCredit): string => {
  return record.id?.toString() || String(record.id);
};
