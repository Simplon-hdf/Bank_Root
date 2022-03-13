import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    const insert = await this.prismaService.account.create({
      data: createAccountDto,
    });

    return insert;
  }

  findAll() {
    return this.prismaService.account.findMany({
      orderBy: {
        account_id: 'desc',
      },
      take: 10,
    });
  }

  findOne(id: number) {
    return this.prismaService.account.findUnique({ where: { account_id: id } });
  }

  findOneDetails(id: number) {
    return this.prismaService.transaction_details.findMany({
      where: { account_id: id },
    });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.prismaService.account.update({
      data: updateAccountDto,
      where: { account_id: id },
    });
  }

  remove(id: number) {
    return this.prismaService.account.delete({ where: { account_id: id } });
  }
}
