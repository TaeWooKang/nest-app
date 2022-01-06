import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatDto } from './create-cat.dto';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let app: INestApplication;
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('This action adds a new cat', () => {
      const createCatData: CreateCatDto = {
        name: 'name',
        age: 19,
        breed: 'bob',
      };
      expect(controller.create(createCatData)).toBe(
        'This action adds a new cat',
      );
    });
  });

  describe('findAll()', () => {
    it('This action returns all cats', () => {
      expect(controller.findAll()).toBe('This action returns all cats');
    });
  });

  describe('/cats (POST)', () => {
    it('/cats (POST)', () => {
      return request(app.getHttpServer())
        .post('/cats')
        .expect(201)
        .expect('This action adds a new cat');
    });
  });

  describe('/cats/void (POST)', () => {
    it('/cats/void (POST)', () => {
      return request(app.getHttpServer())
        .post('/cats/void')
        .expect(204)
        .expect('');
    });
  });

  describe('/cats (GET)', () => {
    it('/cats (GET)', () => {
      return request(app.getHttpServer())
        .get('/cats')
        .expect(200)
        .expect('This action returns all cats');
    });
  });

  describe('/cats/not-found (GET)', () => {
    it('/cats/not-found (GET)', () => {
      return request(app.getHttpServer())
        .get('/cats/not-found')
        .expect(404)
        .expect({
          statusCode: 404,
          message: 'Cannot GET /cats/not-found',
          error: 'Not Found',
        });
    });
  });
});
