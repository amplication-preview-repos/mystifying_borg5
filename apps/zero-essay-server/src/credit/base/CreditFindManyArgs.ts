/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreditWhereInput } from "./CreditWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreditOrderByInput } from "./CreditOrderByInput";

@ArgsType()
class CreditFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreditWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreditWhereInput, { nullable: true })
  @Type(() => CreditWhereInput)
  where?: CreditWhereInput;

  @ApiProperty({
    required: false,
    type: [CreditOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreditOrderByInput], { nullable: true })
  @Type(() => CreditOrderByInput)
  orderBy?: Array<CreditOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CreditFindManyArgs as CreditFindManyArgs };
