import { AiRequest as TAiRequest } from "../api/aiRequest/AiRequest";

export const AIREQUEST_TITLE_FIELD = "id";

export const AiRequestTitle = (record: TAiRequest): string => {
  return record.id?.toString() || String(record.id);
};
