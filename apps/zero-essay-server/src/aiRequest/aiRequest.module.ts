import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiRequestModuleBase } from "./base/aiRequest.module.base";
import { AiRequestService } from "./aiRequest.service";
import { AiRequestController } from "./aiRequest.controller";
import { AiRequestResolver } from "./aiRequest.resolver";

@Module({
  imports: [AiRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiRequestController],
  providers: [AiRequestService, AiRequestResolver],
  exports: [AiRequestService],
})
export class AiRequestModule {}
