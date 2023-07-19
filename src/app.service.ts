import { Injectable } from '@nestjs/common';
import { Movement } from './app.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFirstMovement(): Movement {
    return {
      title: 'Symphony No. 5',
      composer: 'Ludwig van Beethoven',
      year: 1808,
    };
  }
}
