import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMemorialDayTable1652937632838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'memorial_days',
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
                    name: 'memorial_name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'memorial_remark',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'memorial_day',
                    type: 'timestamp',
                    isNullable: false
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
        await queryRunner.dropTable('memorial_days');
    }

}
