import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBacklogTable1653093440627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'backlogs',
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
                    name: 'backlog_day',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'remind',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'priority',
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
        await queryRunner.dropTable('backlogs');
    }

}
