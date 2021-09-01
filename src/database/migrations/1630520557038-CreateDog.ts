import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDog1630520557038 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dog',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'birthday',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'weight',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'institution_id',
            type: 'varchar',
          },
          {
            name: 'adopted',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKDogInstitutionID',
            columnNames: ['institution_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'institution',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dog');
  }
}
