import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ConcertsController } from "./concerts.controller"
import { ConcertSchema } from "./concerts.model"
import { ConcertsService } from "./concerts.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: "Concert", schema: ConcertSchema }])],
    controllers: [ConcertsController],
    providers: [ConcertsService],
    exports: [ConcertsService],
})
export class ConcertsModule {}
