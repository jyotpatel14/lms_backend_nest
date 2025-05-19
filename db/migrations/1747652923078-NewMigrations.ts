import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1747652923078 implements MigrationInterface {
    name = 'NewMigrations1747652923078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_users\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d74ab662f9d3964f78b3416d5d\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_contacts\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`user_first_name\` varchar(255) NOT NULL, \`user_last_name\` varchar(255) NOT NULL, \`designation\` varchar(255) NOT NULL, \`company_id\` varchar(255) NOT NULL, \`company_name\` varchar(255) NOT NULL, \`contact_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`linked_in_url\` varchar(255) NOT NULL, \`first_meeting\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_notes\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`note\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_brochures\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`brochure_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_events\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`start_date_time\` timestamp NOT NULL, \`end_date_time\` timestamp NOT NULL, \`location\` varchar(255) NOT NULL, \`event_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_attachments\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`original_file_name\` varchar(255) NOT NULL, \`file_path\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_companies\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`company_linked_id_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tbl_companies\``);
        await queryRunner.query(`DROP TABLE \`tbl_attachments\``);
        await queryRunner.query(`DROP TABLE \`tbl_events\``);
        await queryRunner.query(`DROP TABLE \`tbl_brochures\``);
        await queryRunner.query(`DROP TABLE \`tbl_notes\``);
        await queryRunner.query(`DROP TABLE \`tbl_contacts\``);
        await queryRunner.query(`DROP INDEX \`IDX_d74ab662f9d3964f78b3416d5d\` ON \`tbl_users\``);
        await queryRunner.query(`DROP TABLE \`tbl_users\``);
    }

}
