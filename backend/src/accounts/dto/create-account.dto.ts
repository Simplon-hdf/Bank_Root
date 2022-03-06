
import { IsNotEmpty, IsString, IsNumber, IsBoolean} from 'class-validator';
 
export class CreateAccountDto {
 
    @IsNumber()
    client_id: number;

    @IsNumber()
    account_number: number;

    @IsNumber()
    account_balance: number;

    @IsBoolean()
    status_code: boolean;
  
}
