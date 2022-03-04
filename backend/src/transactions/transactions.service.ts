import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from '../prisma.service';
import { Client, Transaction, Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  async findAll(): Promise<Transaction[]> {
    // return `This action returns all transactions`;

    const v = await this.prisma.client.create({
      data: {
        title: 'Mister',
        name: 'Danny',
        surname: 'B.',
        email: 'danny@mail.com',
        address: '123 Sreet Road',
        telephone: '0123456789',
        login: 'danny',
        password: 'pwd',
      },
    });

    const v2 = await this.prisma.account.create({
      data: {
        client_id: v.client_id,
        account_number: 12345,
        account_balance: 2341567,
        status_code: false,
      },
    });

    console.log('here three', v, v2);

    return this.prisma.transaction.findMany();
  }

  async findOne(id: number): Promise<Transaction> {
    // return `This action returns a #${id} transaction`;
    return this.prisma.transaction.findUnique({
      where: { transaction_id: id },
    });
  }

  async update(
    id: number,
    // updateTransactionDto: Transaction,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    // return `This action updates a #${id} transaction`;
    return this.prisma.transaction.update({
      where: { transaction_id: id },
      data: updateTransactionDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
