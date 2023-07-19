import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Movement } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/first-movement")
  getFirstMovement(): Movement {
   return this.appService.getFirstMovement();
  }
}
