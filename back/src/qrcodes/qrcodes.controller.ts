import { Controller, Post, Body } from '@nestjs/common'
import { QrCodeService } from './qrcodes.service'

@Controller('qrcodes')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  
  @Post('/create')
  async generateQrCode(@Body('text') concert_id: string): Promise<void> {
    const filename = './'+concert_id+'.png'
    const path_to_page = './'+concert_id
    await this.qrCodeService.generateQrCode(path_to_page, filename)
    //return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
/*
  @Post('/create')
  async generateQrCode(@Body('text') concert_id: string): Promise<string> {
    const filename = './'+concert_id+'.png'
    const path_to_page = './'+concert_id
    await this.qrCodeService.generateQrCode(path_to_page, filename)
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
*/
}