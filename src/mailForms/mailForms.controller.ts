import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './schemas/content.schema';
import { MailFormsService } from './mailForms.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { Suggestion } from './schemas/suggestion.schema';

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
  @ApiResponse({ description: '카테고리별 멘트 조회 API' })
  getRecommendContents(@Query() query): Promise<Content[]> {
    const { category } = query;
    if(category == null)
      return this.mailFormsService.getContents(); // 본문 멘트 조회 
    else
      return this.mailFormsService.getContentsByCategory(category);
  }

  // @Get('/contents')
  // @ApiResponse({ description: '본문 멘트 조회 API' })
  // getContents(): Promise<Content[]> {
  //   return this.mailFormsService.getContents();
  // }

  @Post('/contents')
  @ApiBody({ type: CreateContentDto })
  addContent(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return this.mailFormsService.addContent(createContentDto);
  }

  @Get('/last')
  @ApiResponse({ description: '끝 인사 조회 API' })
  getLastGreetings(@Query() query): Promise<LastGreeting[]> {
    const { category } = query;
    if(category == null)
      return this.mailFormsService.getLastGreetings();
    else
      return this.mailFormsService.getLastGreetingsByCategory(category);
  }

  @Post('/last')
  @ApiBody({ type: CreateGreetingDto })
  addLastGreeting(@Body() createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    return this.mailFormsService.addLastGreeting(createLastGreetingDto);
  }

  @Post('/suggestion')
  @ApiBody({ type: CreateSuggestionDto })
  suggestGreeting(@Body() createSuggestionDto: CreateSuggestionDto): Promise<Suggestion> {
    return this.mailFormsService.suggestGreeting(createSuggestionDto);
  }
}
