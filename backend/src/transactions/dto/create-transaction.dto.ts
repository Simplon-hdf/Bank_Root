export class CreateTransactionDto {
  from_account_id: number;
  to_account_id: number;
  amount: number;
  type: string;
  initiated_by: number;
  status_code: boolean;
}

export class CreateDetailDto {
  transaction_id: number;
  account_id: number;
  amount: number;
  type: string;
  status_code: boolean;
}
