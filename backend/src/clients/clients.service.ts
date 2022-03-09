import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

import { PrismaService } from  'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prismaService: PrismaService) {}
 
 async create(createClientDto: CreateClientDto) {
 
    const result= await this.prismaService.client.create({ data: createClientDto})
 
   return result;
  }

  findAll() {
    return this.prismaService.client.findMany();
  
  }

  findOne(id: number) {
    return this.prismaService.client.findUnique({ where: { client_id: id } });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prismaService.client.update({ data: updateClientDto,where: { client_id: id}})
  }

  remove(id: number) {

    return this.prismaService.client.delete({ where: { client_id: id }});
  }
}
