import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreditModuleBase } from "./base/credit.module.base";
import { CreditService } from "./credit.service";
import { CreditController } from "./credit.controller";
import { CreditResolver } from "./credit.resolver";

@Module({
  imports: [CreditModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreditController],
  providers: [CreditService, CreditResolver],
  exports: [CreditService],
})
export class CreditModule {}
