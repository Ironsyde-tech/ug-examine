import { Module } from '@nestjs/common';
import { UiController } from './ui.controller';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api.service';

@Module({
  controllers: [UiController],
  imports: [HttpModule],
  providers: [ApiService],
})
export class UiModule {}
