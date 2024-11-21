import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LossHistoryEntriesModule } from './loss-history-entries/loss-history-entries.module';
import { join } from 'path';
import { OfficialIdsModule } from './official-ids/official-ids.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Can be true for in-memory
      sortSchema: true,
    }),
    LossHistoryEntriesModule,
    OfficialIdsModule,
  ],
})
export class AppModule {}
