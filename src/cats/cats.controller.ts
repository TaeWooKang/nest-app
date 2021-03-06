import {
  Controller,
  Get,
  Post,
  Body,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get('/:id')
  async findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
