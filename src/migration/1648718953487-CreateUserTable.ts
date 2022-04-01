import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1648718953487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
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
                    name: 'username',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'nickname',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'salt',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'gender',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'avatar',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'birthday',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'primary_key',
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
        await queryRunner.dropTable('users');
    }

}
