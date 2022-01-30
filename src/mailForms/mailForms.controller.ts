import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './schemas/content.schema';
import { MailFormsService } from './mailForms.service';

@ApiTags('mail-forms')
@Controller('mail-forms')
export class MailFormsController {
  constructor(private readonly mailFormsService: MailFormsService) {}

  @Get('/first')
  @ApiResponse({ description: '첫 인사 조회 API' })
  getFirstmailForms(): Promise<FirstGreeting[]> {
    return this.mailFormsService.getFirstGreetings();
  }

  @Post('/first')
  @ApiBody({ type: CreateGreetingDto })
  addFirstGreeting(@Body() createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    return this.mailFormsService.addFirstGreeting(createFirstGreetingDto);
  }

  @Get('/contents')
  @ApiResponse({ description: '본문 멘트 조회 API' })
  getContents(): Promise<Content[]> {
    return this.mailFormsService.getContents();
  }

  @Post('/contents')
  @ApiBody({ type: CreateContentDto })
  addContent(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return this.mailFormsService.addContent(createContentDto);
  }

  @Get('/last')
  @ApiResponse({ description: '끝 인사 조회 API' })
  getLastGreetings(): Promise<LastGreeting[]> {
    return this.mailFormsService.getLastGreetings();
  }

  @Post('/last')
  @ApiBody({ type: CreateGreetingDto })
  addLastGreeting(@Body() createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    return this.mailFormsService.addLastGreeting(createLastGreetingDto);
  }


}
