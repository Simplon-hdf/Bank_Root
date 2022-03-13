import { Injectable } from '@nestjs/common';
import {
  CreateTransactionDto,
  CreateDetailDto,
} from './dto/create-transaction.dto';
import {
  UpdateTransactionDto,
  UpdateDetailDto,
} from './dto/update-transaction.dto';
import { PrismaService } from '../prisma.service';
import { Transaction, Transaction_details, Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(ct: CreateTransactionDto) {
    console.log(':::::\n', ct, '\n:::::');

    // typed to match return result
    type procedureResult = {
      transac_id: number;
    };
    const result: procedureResult = await this.prisma
      .$queryRaw`CALL transfer_transactions(
        ${ct.initiated_by},
        ${ct.from_account_id},
        ${ct.to_account_id},
        ${ct.amount},
        ${ct.type})`;

    return this.findOne(result[0].transac_id);
  }

  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      orderBy: {
        transaction_id: 'desc',
      },
      take: 10,
    });
  }

  async findOne(id: number): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: { transaction_id: id },
    });
  }
  async findOneDetails(id: number): Promise<Transaction_details[]> {
    return this.prisma.transaction_details.findMany({
      where: { transaction_id: id },
    });
  }

  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { transaction_id: id },
      data: updateTransactionDto,
    });
  }

  async remove(id: number) {
    return this.prisma.transaction.delete({
      where: { transaction_id: id },
    });
  }
}
