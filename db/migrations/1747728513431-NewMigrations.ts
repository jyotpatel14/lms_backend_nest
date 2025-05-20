import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1747728513431 implements MigrationInterface {
    name = 'NewMigrations1747728513431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_brochures\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`brochure_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_users\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`linkedin_url\` varchar(255) NOT NULL, \`company_name\` varchar(255) NOT NULL, \`company_linkedin_url\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d74ab662f9d3964f78b3416d5d\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_user_event_invitations\` (\`id\` varchar(36) NOT NULL, \`role\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_attachments\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`event_contact_id\` varchar(255) NOT NULL, \`file_name\` varchar(255) NOT NULL, \`original_file_path\` varchar(255) NOT NULL, \`file_path\` varchar(255) NOT NULL, \`file_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_events\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`start_date_time\` timestamp NOT NULL, \`end_date_time\` timestamp NOT NULL, \`location\` varchar(255) NOT NULL, \`event_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_notes\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`event_contact_id\` varchar(255) NOT NULL, \`note_text\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_contacts\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`user_first_name\` varchar(255) NOT NULL, \`user_last_name\` varchar(255) NOT NULL, \`designation\` varchar(255) NOT NULL, \`company_id\` varchar(255) NOT NULL, \`company_name\` varchar(255) NOT NULL, \`contact_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`linked_in_url\` varchar(255) NOT NULL, \`first_meeting\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_companies\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` varchar(255) NOT NULL, \`deleted_at\` timestamp NULL, \`deleted_by\` varchar(255) NULL, \`is_active\` int NOT NULL DEFAULT '1', \`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`company_linked_id_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_configurations\` (\`id\` varchar(36) NOT NULL, \`conf_key\` varchar(255) NOT NULL, \`conf_value\` int NOT NULL, \`display_text\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`display_order\` int NOT NULL, UNIQUE INDEX \`IDX_95eef1068c1d071dfbd5b26c9e\` (\`conf_key\`, \`conf_value\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_brochure_owners\` (\`owner_id\` varchar(36) NOT NULL, \`brochure_id\` varchar(36) NOT NULL, INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` (\`owner_id\`), INDEX \`IDX_3fd3cb8fcde5d9965da6102247\` (\`brochure_id\`), PRIMARY KEY (\`owner_id\`, \`brochure_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tbl_contact_events\` (\`contact_id\` varchar(36) NOT NULL, \`event_id\` varchar(36) NOT NULL, INDEX \`IDX_4a0edd600e542eb8272d715b1f\` (\`contact_id\`), INDEX \`IDX_4e6dc6608d91064a57be3cc9a1\` (\`event_id\`), PRIMARY KEY (\`contact_id\`, \`event_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP COLUMN \`owner_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD \`owner_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`owner_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD \`company_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`owner_id\`, \`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`owner_id\`, \`brochure_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`company_id\`, \`brochure_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\` (\`owner_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\` (\`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_15fe2ec8ec41bbef933fdaa026e\` FOREIGN KEY (\`owner_id\`) REFERENCES \`tbl_users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_3fd3cb8fcde5d9965da61022472\` FOREIGN KEY (\`brochure_id\`) REFERENCES \`tbl_brochures\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_contact_events\` ADD CONSTRAINT \`FK_4a0edd600e542eb8272d715b1f5\` FOREIGN KEY (\`contact_id\`) REFERENCES \`tbl_contacts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_contact_events\` ADD CONSTRAINT \`FK_4e6dc6608d91064a57be3cc9a1d\` FOREIGN KEY (\`event_id\`) REFERENCES \`tbl_events\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_800e8180371dda1d273cdd9a850\` FOREIGN KEY (\`company_id\`) REFERENCES \`tbl_companies\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_800e8180371dda1d273cdd9a850\``);
        await queryRunner.query(`ALTER TABLE \`tbl_contact_events\` DROP FOREIGN KEY \`FK_4e6dc6608d91064a57be3cc9a1d\``);
        await queryRunner.query(`ALTER TABLE \`tbl_contact_events\` DROP FOREIGN KEY \`FK_4a0edd600e542eb8272d715b1f5\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_3fd3cb8fcde5d9965da61022472\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_15fe2ec8ec41bbef933fdaa026e\``);
        await queryRunner.query(`DROP INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`owner_id\`, \`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`owner_id\`, \`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`owner_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP COLUMN \`company_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP COLUMN \`owner_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD \`owner_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\` (\`owner_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`owner_id\`, \`brochure_id\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_4e6dc6608d91064a57be3cc9a1\` ON \`tbl_contact_events\``);
        await queryRunner.query(`DROP INDEX \`IDX_4a0edd600e542eb8272d715b1f\` ON \`tbl_contact_events\``);
        await queryRunner.query(`DROP TABLE \`tbl_contact_events\``);
        await queryRunner.query(`DROP INDEX \`IDX_3fd3cb8fcde5d9965da6102247\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP TABLE \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP INDEX \`IDX_95eef1068c1d071dfbd5b26c9e\` ON \`tbl_configurations\``);
        await queryRunner.query(`DROP TABLE \`tbl_configurations\``);
        await queryRunner.query(`DROP TABLE \`tbl_companies\``);
        await queryRunner.query(`DROP TABLE \`tbl_contacts\``);
        await queryRunner.query(`DROP TABLE \`tbl_notes\``);
        await queryRunner.query(`DROP TABLE \`tbl_events\``);
        await queryRunner.query(`DROP TABLE \`tbl_attachments\``);
        await queryRunner.query(`DROP TABLE \`tbl_user_event_invitations\``);
        await queryRunner.query(`DROP INDEX \`IDX_d74ab662f9d3964f78b3416d5d\` ON \`tbl_users\``);
        await queryRunner.query(`DROP TABLE \`tbl_users\``);
        await queryRunner.query(`DROP TABLE \`tbl_brochures\``);
    }

}
