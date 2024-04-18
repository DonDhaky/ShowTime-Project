import { Body, Controller, Param, Post, Get, Put, Patch, Delete } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { Concert } from './concerts.model';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Post('/schedule')
  async createConcert(@Body() createConcertDto: CreateConcertDto) {
      const result = await this.concertsService.createtConcert(createConcertDto);
      return {
        msg: 'Concert successfully registered',
        concertId: result.id,
        concertTitle: result.title,
        end: 'message end'
      };
    }

  @Get()
  async getConcerts(): Promise<Concert[]> {
      return await this.concertsService.getConcerts();
  }

  @Get(':id')
  async getConcertById(@Param('id') id: string): Promise<Concert> {
      return await this.concertsService.getConcertById(id);
  }

  @Get('/bytitle/:title')
  async getConcertByTitle(@Param('title') title: string): Promise<Concert> {
      return await this.concertsService.getConcertByTitle(title);
  }

  @Get('/bygroup/:group')
  async getConcertByGroup(@Param('group') group: string): Promise<Concert[]> {
      return await this.concertsService.getConcertByGroup(group);
  }

  @Put(':id')
  async updateConcert(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return await this.concertsService.updateConcert(id, updateConcertDto);
  }

  @Patch(':id')
  async patchConcert(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return await this.concertsService.patchConcert(id, updateConcertDto);
  }

  @Delete(':id')
  async deleteConcert(@Param('id') id: string): Promise<Concert> {
      return await this.concertsService.deleteConcert(id);
  }
}
