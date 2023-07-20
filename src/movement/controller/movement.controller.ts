import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovementService } from '../service/movement.service';
import { Movement } from '../entity/movement.entity';
import { MovementDTO } from '../dto/movement.dto';

@Controller("movements")
export class MovementController {
	constructor(private readonly movementService: MovementService) {}

	@Get()
	async getAllMovements(): Promise<Movement[]> {
		return await this.movementService.getAll();
	}

	@Post()
	async createMovement(@Body() data: MovementDTO) {
		await this.movementService.createMovement(data);
	}
}
