import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';



@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return{message:(  this.clientsService.create(createClientDto))};
  }

  @Get()
  findAll() {
    return{message:(  this.clientsService.findAll())};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return{message:( this.clientsService.findOne(+id))};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return{message:( this.clientsService.update(+id, updateClientDto))};
  }

  @Delete(':id')
  remove(@Param('id') id: Number) {
       return{message:( this.clientsService.remove(+id))};
  }
}
