import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { ConcertsController } from './concerts/concerts.controller';
import { UsersModule } from './users/users.module';
import { ConcertsModule } from './concerts/concerts.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_db'),
    UsersModule,
    ConcertsModule,
  ],
  controllers: [AppController, UsersController, ConcertsController],
  providers: [AppService],
})
export class AppModule {}
