import { RegisterQueueOptions } from '@nestjs/bullmq/dist/interfaces/register-queue-options.interface'
import { DynamicModule } from '@nestjs/common'
import { BullModule } from '@nestjs/bullmq'
import { BullBoardModule } from '@bull-board/nestjs'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'

// Use in "imports" section of module queue should belong to
export function registerQueue(options: RegisterQueueOptions): DynamicModule[] {
  return [
    BullModule.registerQueue(options),

    BullBoardModule.forFeature({
      name: options.name,
      adapter: BullMQAdapter,
    }),
  ]
}
