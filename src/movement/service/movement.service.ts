import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/service/base.service';
import { Movement } from '../entity/movement.entity';
import { BaseRepository } from 'src/base/repository/base.repository';
import { MovementDTO } from '../dto/movement.dto';

@Injectable()
export class MovementService extends BaseService<Movement> {
	constructor(
		@InjectRepository(Movement)
		private readonly movementRepository: BaseRepository<Movement>
	) {
    super(movementRepository);
  }

	async getAll(): Promise<Movement[]> {
		return await this.findAll();
	}
//como la fecha es opcional creo que sea un nuevo dato, cosa de que se creo como "hoy"
	async createMovement(data: MovementDTO) {
		if (data.date == null) {
			data.date = new Date();
		}
		//aka hago el this create (data) para crear toda la tabla de valores que le paso
		await this.create(data);
	}


}
