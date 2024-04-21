import { Module } from "@nestjs/common"
import { QrCodeController } from "./qrcodes.controller"
import { QrCodeService } from "./qrcodes.service"

@Module({
    controllers: [QrCodeController],
    providers: [QrCodeService],
    exports: [QrCodeService],
})
export class QrCodeModule {}
