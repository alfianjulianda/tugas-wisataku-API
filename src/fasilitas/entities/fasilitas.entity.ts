import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fasilitas {
  @Field(() => Int)
  id: number;

  @Field()
  namaFasilitas: string;
}