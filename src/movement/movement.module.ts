import { Module } from '@nestjs/common';
import { MovementController } from './controller/movement.controller';
import { MovementService } from './service/movement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movement } from './entity/movement.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Movement])],
	controllers: [MovementController],
	providers: [MovementService],
})
export class MovementModule {}
