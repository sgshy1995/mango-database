import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeamChargeTypeTable1649819480344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'team_charge_types',
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
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'realname',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'icon',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'created_type',
                    type: 'varchar',
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
                    name: 'balance_type',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'status',
                    type: 'int',
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
        await queryRunner.dropTable('team_charge_types');
    }

}