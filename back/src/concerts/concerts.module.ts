import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ConcertController } from "./concerts.controller"
import { ConcertSchema } from "./concerts.model"
import { ConcertService } from "./concerts.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: "Concert", schema: ConcertSchema }])],
    controllers: [ConcertController],
    providers: [ConcertService],
    exports: [ConcertService],
})
export class ConcertModule {}
