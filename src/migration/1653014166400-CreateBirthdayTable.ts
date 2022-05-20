import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBirthdayTable1653014166400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'birthdays',
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
                    name: 'remark',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'birthday',
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'is_lunar',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'lunar_cn',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'lunar_year',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'lunar_month',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'lunar_day',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'remind',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'created_by',
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
        await queryRunner.dropTable('birthdays');
    }

}
