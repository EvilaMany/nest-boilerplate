import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config"
import {QueueModule} from "./lib/queue/queue.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    QueueModule
  ]
})
export class AppModule {}
