import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeamChargeRecordTable1649639456130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'team_charge_records',
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
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'team_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'charge_time',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'remark',
                    type: 'varchar',
                    isNullable: true
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
        await queryRunner.dropTable('team_charge_records');
    }

}
