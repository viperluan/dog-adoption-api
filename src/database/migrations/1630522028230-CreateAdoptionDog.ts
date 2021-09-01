import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdoptionDog1630522028230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adoption_dog',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isUnique: true,
            isPrimary: true,
          },
          {
            name: 'adoption_id',
            type: 'varchar',
          },
          {
            name: 'dog_id',
            type: 'varchar',
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
            name: 'FKAdoptionDogAdoptionID',
            columnNames: ['adoption_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'adoption',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKAdoptionDogDogID',
            columnNames: ['dog_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'dog',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adoption_dog');
  }
}
