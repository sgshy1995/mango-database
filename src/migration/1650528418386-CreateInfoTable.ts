import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInfoTable1650528418386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'infos',
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
                    name: 'user_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'money_background',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'money_avatar',
                    type: 'text',
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
        await queryRunner.dropTable('infos');
    }

}
