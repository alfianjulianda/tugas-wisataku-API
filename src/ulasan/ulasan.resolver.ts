import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUlasanInput } from './dto/create-ulasan.input';
import { Ulasan } from './entities/ulasan.entity';

@Resolver(() => Ulasan)
export class UlasanResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Ulasan, { name: 'tambahUlasan' })
  tambahUlasan(@Args('input') input: CreateUlasanInput) {
    return this.prisma.ulasan.create({ data: input });
  }
}