import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;
  const id = '1';
  const createCatData: CreateCatDto = {
    name: 'name',
    age: 19,
    breed: 'bob',
  };
  const updateCatDto: UpdateCatDto = {
    id,
    name: 'name2',
    age: 20,
    breed: 'bob2',
  };
  const listAllEntities: ListAllEntities = { limit: 100 };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('This action adds a new cat', () => {
      expect(controller.create(createCatData)).toBe(
        'This action adds a new cat',
      );
    });
  });

  describe('findAll()', () => {
    it('This action returns all cats', () => {
      expect(controller.findAll(listAllEntities)).toBe(
        `This action returns all cats (limit: ${listAllEntities.limit} items)`,
      );
    });
  });

  describe('findOne()', () => {
    it('This action returns all cats', () => {
      expect(controller.findOne(id)).toBe(`This action returns a #${id} cat`);
    });
  });

  describe('update()', () => {
    it('This action returns all cats', () => {
      expect(controller.update(id, updateCatDto)).toBe(
        `This action updates a #${updateCatDto.id} cat`,
      );
    });
  });

  describe('remove()', () => {
    it('This action returns all cats', () => {
      expect(controller.remove(id)).toBe(`This action removes a #${id} cat`);
    });
  });
});
