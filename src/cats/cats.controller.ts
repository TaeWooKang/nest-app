import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  // @Post()
  // @HttpCode(201)
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Post('/void')
  @HttpCode(204)
  createVoid(): void {
    // This action adds a new cat with 204
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('promise')
  async findAllPromise(): Promise<any[]> {
    return [];
  }

  @Get('observer')
  findAllObserver(): Observable<any[]> {
    return of([]);
  }
}
