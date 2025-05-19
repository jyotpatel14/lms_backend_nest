import { Module, UseInterceptors } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { UserModule } from './modules/user/user.module';
import { EventsModule } from './modules/events/events.module';
import { NotesModule } from './modules/notes/notes.module';
import { BrochuresModule } from './modules/brochures/brochures.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { AttachmentsModule } from './modules/attachments/attachments.module';

@Module({
  imports: [
    //for DBC
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    //for ORM and Migrations
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    DatabaseModule,
    AuthModule,

    AttachmentsModule,
    BrochuresModule,
    CompaniesModule,
    ContactsModule,
    EventsModule,
    UserModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
