import {MigrationInterface, QueryRunner} from "typeorm";

export class InitializeDB1599578697139 implements MigrationInterface {
    name = 'InitializeDB1599578697139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `team` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, `teamId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `project` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `projectManagerId` int NULL, UNIQUE INDEX `REL_5d41ecdc2d2e0ec8a4b019008f` (`projectManagerId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `deadline` datetime NOT NULL, `status` varchar(255) NOT NULL, `projectId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `note` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `taskId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_assigned_tasks_task` (`userId` int NOT NULL, `taskId` int NOT NULL, INDEX `IDX_96f91b5d5903bb18c719bed4c7` (`userId`), INDEX `IDX_cf77ea3bfd015cef1c01213295` (`taskId`), PRIMARY KEY (`userId`, `taskId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_1e89f1fd137dc7fea7242377e25` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `project` ADD CONSTRAINT `FK_5d41ecdc2d2e0ec8a4b019008fc` FOREIGN KEY (`projectManagerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `task` ADD CONSTRAINT `FK_3797a20ef5553ae87af126bc2fe` FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `note` ADD CONSTRAINT `FK_202af1cf1b6c5e03fb8f1c4748c` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_assigned_tasks_task` ADD CONSTRAINT `FK_96f91b5d5903bb18c719bed4c71` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_assigned_tasks_task` ADD CONSTRAINT `FK_cf77ea3bfd015cef1c012132959` FOREIGN KEY (`taskId`) REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_assigned_tasks_task` DROP FOREIGN KEY `FK_cf77ea3bfd015cef1c012132959`");
        await queryRunner.query("ALTER TABLE `user_assigned_tasks_task` DROP FOREIGN KEY `FK_96f91b5d5903bb18c719bed4c71`");
        await queryRunner.query("ALTER TABLE `note` DROP FOREIGN KEY `FK_202af1cf1b6c5e03fb8f1c4748c`");
        await queryRunner.query("ALTER TABLE `task` DROP FOREIGN KEY `FK_3797a20ef5553ae87af126bc2fe`");
        await queryRunner.query("ALTER TABLE `project` DROP FOREIGN KEY `FK_5d41ecdc2d2e0ec8a4b019008fc`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_1e89f1fd137dc7fea7242377e25`");
        await queryRunner.query("DROP INDEX `IDX_cf77ea3bfd015cef1c01213295` ON `user_assigned_tasks_task`");
        await queryRunner.query("DROP INDEX `IDX_96f91b5d5903bb18c719bed4c7` ON `user_assigned_tasks_task`");
        await queryRunner.query("DROP TABLE `user_assigned_tasks_task`");
        await queryRunner.query("DROP TABLE `note`");
        await queryRunner.query("DROP TABLE `task`");
        await queryRunner.query("DROP INDEX `REL_5d41ecdc2d2e0ec8a4b019008f` ON `project`");
        await queryRunner.query("DROP TABLE `project`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `team`");
    }

}
