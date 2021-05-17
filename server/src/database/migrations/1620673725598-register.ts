import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class register1620673725598 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'register',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'university',
                type: 'varchar',
              },
              {
                name: 'course',
                type: 'varchar',
              },
              {
                name: 'department',
                type: 'varchar',
              },
              {
                name: 'score',
                type: 'decimal',
              },
              {
                name: 'date',
                type: 'varchar',
              },
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('register');
    }

}
