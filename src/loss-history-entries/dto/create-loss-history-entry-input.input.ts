import { InputType, OmitType } from '@nestjs/graphql';
import { UpdateLossHistoryEntryInput } from './update-loss-history-entry-input.input';

@InputType()
export class CreateLossHistoryEntryInput extends OmitType(
  UpdateLossHistoryEntryInput,
  ['id'],
) {}
