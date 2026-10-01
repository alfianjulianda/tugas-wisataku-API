import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUlasanInput {
  @Field(() => Int)
  destinasiId: number;

  @Field(() => Int)
  rating: number;

  @Field()
  komentar: string;
}