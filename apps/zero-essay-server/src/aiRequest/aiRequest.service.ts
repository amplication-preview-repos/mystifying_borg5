import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiRequestServiceBase } from "./base/aiRequest.service.base";

@Injectable()
export class AiRequestService extends AiRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
