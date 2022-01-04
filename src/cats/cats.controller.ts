import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  create(): string {
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
}
