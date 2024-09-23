import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiRequestService } from "./aiRequest.service";
import { AiRequestControllerBase } from "./base/aiRequest.controller.base";

@swagger.ApiTags("aiRequests")
@common.Controller("aiRequests")
export class AiRequestController extends AiRequestControllerBase {
  constructor(
    protected readonly service: AiRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
