export interface CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export interface UpdateCatDto {
  id: string;
  name: string;
  age: number;
  breed: string;
}

export interface ListAllEntities {
  limit: number;
}
