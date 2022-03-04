import { PartialType } from '@nestjs/mapped-types';
import {
  CreateTransactionDto,
  CreateDetailDto,
} from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}

export class UpdateDetailDto extends PartialType(CreateDetailDto) {}
