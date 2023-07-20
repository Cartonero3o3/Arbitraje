import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '../repository/base.repository';

@Injectable()
export class BaseService<T> {
	constructor(
		@InjectRepository(BaseRepository)
		private readonly baseRepository: BaseRepository<T>
	) {}

	async findAll(options?: any) {
		return await this.baseRepository.find(options);
	}

	async create(data: any) {
		await this.baseRepository.save(data);
	}
}
