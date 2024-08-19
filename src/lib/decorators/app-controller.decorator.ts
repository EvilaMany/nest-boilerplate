import {applyDecorators, Controller} from "@nestjs/common"
import {ApiTags} from "@nestjs/swagger"

export function AppController(prefix: string | string[]) {
  return applyDecorators(
    Controller(prefix),
    ApiTags(...(Array.isArray(prefix) ? prefix : [prefix]))
  )
}
