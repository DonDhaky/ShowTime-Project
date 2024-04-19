import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users/users.controller';
import { ConcertController } from './concerts/concerts.controller';
import { UserModule } from './users/users.module';
import { ConcertModule } from './concerts/concerts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_db'),
    UserModule,
    ConcertModule,
  ],
  controllers: [AppController, UserController, ConcertController],
  providers: [AppService],
})
export class AppModule {}
