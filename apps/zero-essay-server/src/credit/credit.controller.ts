import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreditService } from "./credit.service";
import { CreditControllerBase } from "./base/credit.controller.base";

@swagger.ApiTags("credits")
@common.Controller("credits")
export class CreditController extends CreditControllerBase {
  constructor(
    protected readonly service: CreditService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
