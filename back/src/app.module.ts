import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users/users.controller';
import { ConcertController } from './concerts/concerts.controller';
import { QrCodeController } from './qrcodes/qrcodes.controller'
import { UserModule } from './users/users.module';
import { ConcertModule } from './concerts/concerts.module';
import { QrCodeModule } from './qrcodes/qrcodes.module'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_db'),
    UserModule,
    ConcertModule,
    QrCodeModule
  ],
  controllers: [AppController, UserController, ConcertController, QrCodeController],
  providers: [AppService],
})
export class AppModule {}