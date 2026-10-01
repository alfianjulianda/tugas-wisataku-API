import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { DestinasiModule } from './destinasi/destinasi.module';
import { FasilitasModule } from './fasilitas/fasilitas.module';
import { PrismaModule } from './prisma/prisma.module';
import { UlasanModule } from './ulasan/ulasan.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
			graphiql: false,
			plugins: [
				ApolloServerPluginLandingPageLocalDefault() as unknown as NonNullable<
					ApolloDriverConfig['plugins']
				>[number],
			],
		}),
		PrismaModule,
		DestinasiModule,
		UlasanModule,
		FasilitasModule,
	],
})
export class AppModule {}