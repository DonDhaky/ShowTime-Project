import { Injectable } from '@nestjs/common'
import QRCode from 'qrcode'
//import * as qrcode from 'qrcode';
import { createWriteStream } from 'fs'

@Injectable()
export class QrCodeService {


  async generateQrCode(text: string, filename: string): Promise<void> {
    const qrCodeStream = QRCode.image(text, {
      type: 'png',
      quality: 0.3,
      margin: 2,
    })

    const writeStream = createWriteStream(filename)

    qrCodeStream.pipe(writeStream)

    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve)
      writeStream.on('error', reject)
    })
  }

 /*
  async generateQrCode2(data: string): Promise<string> {
    try {
      const qrCodeDataURL = await qrcode.toDataURL(data);
      return qrCodeDataURL;
    } catch (error) {
      throw new Error('Failed to generate QR code.');
    }
  }
  */
}
