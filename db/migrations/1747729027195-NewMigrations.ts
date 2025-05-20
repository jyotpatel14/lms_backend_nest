import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1747729027195 implements MigrationInterface {
    name = 'NewMigrations1747729027195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_800e8180371dda1d273cdd9a850\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_15fe2ec8ec41bbef933fdaa026e\``);
        await queryRunner.query(`DROP INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP COLUMN \`company_id\``);
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
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` DROP COLUMN \`event_contact_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` ADD \`event_contact_id\` varchar(36) NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\` (\`owner_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\` (\`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` ADD CONSTRAINT \`FK_5b50c82f9d1c3c76ce04aa7009f\` FOREIGN KEY (\`event_contact_id\`) REFERENCES \`tbl_contacts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_15fe2ec8ec41bbef933fdaa026e\` FOREIGN KEY (\`owner_id\`) REFERENCES \`tbl_users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_800e8180371dda1d273cdd9a850\` FOREIGN KEY (\`company_id\`) REFERENCES \`tbl_companies\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_800e8180371dda1d273cdd9a850\``);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP FOREIGN KEY \`FK_15fe2ec8ec41bbef933fdaa026e\``);
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` DROP FOREIGN KEY \`FK_5b50c82f9d1c3c76ce04aa7009f\``);
        await queryRunner.query(`DROP INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`DROP INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\``);
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` DROP COLUMN \`event_contact_id\``);
        await queryRunner.query(`ALTER TABLE \`tbl_attachments\` ADD \`event_contact_id\` varchar(255) NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD \`company_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD PRIMARY KEY (\`brochure_id\`, \`company_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_15fe2ec8ec41bbef933fdaa026\` ON \`tbl_brochure_owners\` (\`owner_id\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_800e8180371dda1d273cdd9a85\` ON \`tbl_brochure_owners\` (\`company_id\`)`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_15fe2ec8ec41bbef933fdaa026e\` FOREIGN KEY (\`owner_id\`) REFERENCES \`tbl_users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tbl_brochure_owners\` ADD CONSTRAINT \`FK_800e8180371dda1d273cdd9a850\` FOREIGN KEY (\`company_id\`) REFERENCES \`tbl_companies\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
