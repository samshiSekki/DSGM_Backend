import { Controller, Get} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SpellCheckerService } from 'src/spellChecker/spellChecker.service';

@ApiTags('spell checker')
@Controller('spell-checker')
export class SpellCheckerController {
  constructor(
    private readonly spellCheckerService: SpellCheckerService
  ) {}

  @Get('/passportKey')
  @ApiOperation({summary:'passport Key 조회'})
  async getPassportKey() {
    const passportKey = await this.spellCheckerService.getPassportKey();
    return passportKey != null ? { passportKey } : { message: '응답 실패' };
  }
}