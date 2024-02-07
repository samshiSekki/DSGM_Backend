import { Module } from '@nestjs/common';
import { SpellCheckerService } from './spellChecker.service';
import { SpellCheckerController } from './spellChecker.controller';

@Module({
  controllers: [SpellCheckerController],
  providers: [SpellCheckerService]
})
export class SpellCheckerModule {}
