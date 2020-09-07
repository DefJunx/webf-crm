import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNotes1599484974658 implements MigrationInterface {
    name = 'AddNotes1599484974658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `note` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `taskId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `note` ADD CONSTRAINT `FK_202af1cf1b6c5e03fb8f1c4748c` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `note` DROP FOREIGN KEY `FK_202af1cf1b6c5e03fb8f1c4748c`");
        await queryRunner.query("DROP TABLE `note`");
    }

}
