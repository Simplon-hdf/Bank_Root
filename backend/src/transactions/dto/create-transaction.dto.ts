export class CreateTransactionDto {
  from_account_id: number;
  to_account_id: number;
  amount: number;
  type: string;
  initiated_by: number;
  status_code: boolean;
}
