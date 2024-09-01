import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal } from './deal.entity';

@Injectable()
export class DealService {
  constructor(
    @InjectRepository(Deal)
    private dealRepository: Repository<Deal>,
  ) {}

  async create(dealData: Partial<Deal>, attachment: string): Promise<Deal> {
    const deal = this.dealRepository.create({ ...dealData, attachment });
    return this.dealRepository.save(deal);
  }

  findAll(): Promise<Deal[]> {
    return this.dealRepository.find();
  }
}
