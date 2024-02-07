import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailFormsModule } from './mailForms/mailForms.module';
import { join } from 'path';
import { SpellCheckerModule } from './spellChecker/spellChecker.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'build'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `${process.env.DB_url}`,
      }),
    }),
    MailFormsModule, SpellCheckerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}