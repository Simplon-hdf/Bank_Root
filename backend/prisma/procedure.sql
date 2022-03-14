-- PROCEDURE: public.transfer_transactions(integer, integer, integer, integer, text, integer)

-- DROP PROCEDURE IF EXISTS public.transfer_transactions(integer, integer, integer, integer, text, integer);

CREATE OR REPLACE PROCEDURE public.transfer_transactions(
	initiated_by integer,
	account_fromid integer,
	acoount_toid integer,
	amount integer,
	type text,
	INOUT transac_id integer DEFAULT -1)
LANGUAGE 'plpgsql'
AS $BODY$
        declare typeto varchar(30);
        ammountto int;
        ammountFromo int;
        transactionid int ;
    begin

        INSERT INTO public."Transaction"(
        from_account_id, to_account_id, amount, type, initiated_by, "updatedAt" )
        VALUES (account_fromId, acoount_toid, amount, type, initiated_by, NOW())
        RETURNING  transaction_id INTO transactionid;

          IF type = 'credit' then

            INSERT INTO public."Transaction_details"(
            transaction_id, account_id, amount, type, credit_date, status_code,"updatedAt" )
            VALUES (transactionid, account_fromId, amount, type, NOW(), true,NOW());

            UPDATE public."Account"
            SET  account_balance = account_balance+ amount
            WHERE account_id = account_fromId;

        elseif type = 'debit' then

            INSERT INTO public."Transaction_details"(
            transaction_id, account_id, amount, type, credit_date, status_code,"updatedAt" )
            VALUES (transactionid, acoount_toid, -amount, type , NOW(), true,NOW());

            UPDATE public."Account"
            set account_balance = account_balance - amount
            where account_id =account_fromId; 

        elseif type = 'transfer' then type= 'credit';
            typeto ='debit';
            ammountto= amount ;
            amount= -amount ;

            INSERT INTO public."Transaction_details"(
            transaction_id, account_id, amount, type, credit_date, status_code,"updatedAt" )
            VALUES (transactionid, account_fromId, amount, type, NOW(), true,NOW());

            UPDATE public."Account"
            SET  account_balance = account_balance+ amount
            WHERE account_id = account_fromId;

            INSERT INTO public."Transaction_details"(
            transaction_id, account_id, amount, type, credit_date, status_code,"updatedAt" )
            VALUES (transactionid, acoount_toid, ammountto, typeto, NOW(), true,NOW());

            UPDATE public."Account"
            set account_balance = account_balance+ ammountto
            where account_id =acoount_toid; 

        end if; 

            /*SELECT transaction_id 
            FROM public."Transaction" 
            where transaction_id = transactionid
              INTO transac_id;*/
			  transac_id = transactionid;
	end; 

$BODY$;

ALTER PROCEDURE public.transfer_transactions(integer, integer, integer, integer, text, integer)
    OWNER TO postgres;