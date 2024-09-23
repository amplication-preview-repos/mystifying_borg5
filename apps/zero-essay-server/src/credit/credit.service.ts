import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditServiceBase } from "./base/credit.service.base";

@Injectable()
export class CreditService extends CreditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
