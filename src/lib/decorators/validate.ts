import {applyDecorators} from "@nestjs/common"

export function Validate(...decorators: PropertyDecorator[]) {
  return applyDecorators(...decorators)
}
