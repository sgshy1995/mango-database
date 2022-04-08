import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChargeRecordTable1649211844691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'charge_records',
            columns: [
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'charge_type',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'balance_type',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'charge_num',
                    type: 'float',
                    isNullable: false
                },
                {
                    name: 'created_by',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'team_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'charge_time',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('charge_records');
    }

}
