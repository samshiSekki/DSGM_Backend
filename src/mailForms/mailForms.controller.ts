import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiQuery, ApiOperation } from '@nestjs/swagger';
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
  @ApiOperation({ summary: '첫 인사 조회 API' })
  @ApiResponse({ description: '첫 인사 조회 API' })
  @ApiQuery({ name: 'category', required: false, description: 'type명' })
  getFirstGreetings(@Query() query): Promise<FirstGreeting[]> {
    const { category } = query;
    if (category == null) return this.mailFormsService.getFirstGreetings();
    return this.mailFormsService.getFirstGreetingsByCategory(category);
  }

  @Post('/first')
  @ApiBody({ type: CreateGreetingDto })
  addFirstGreeting(@Body() createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    return this.mailFormsService.addFirstGreeting(createFirstGreetingDto);
  }

  @Get('/contents')
  @ApiOperation({ summary: '카테고리별 멘트 조회 API' })
  @ApiResponse({ description: '카테고리별 멘트 조회 API' })
  @ApiQuery({ name: 'category', required: false, description: 'type명 _ 빌넣 please / 추천서 recomment / 성적문의 grade' })
  getRecommendContents(@Query() query): Promise<Content[]> {
    const { category } = query;
    if (category == null) return this.mailFormsService.getContents();
    return this.mailFormsService.getContentsByCategory(category);
  }

  @Post('/contents')
  @ApiBody({ type: CreateContentDto })
  addContent(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return this.mailFormsService.addContent(createContentDto);
  }

  @Get('/last')
  @ApiOperation({ summary: '끝 인사 조회 API' })
  @ApiResponse({ description: '끝 인사 조회 API' })
  @ApiQuery({ name: 'category', required: false, description: 'type명' })
  getLastGreetings(@Query() query): Promise<LastGreeting[]> {
    const { category } = query;
    if (category == null) return this.mailFormsService.getLastGreetings();
    return this.mailFormsService.getLastGreetingsByCategory(category);
  }

  @Post('/last')
  @ApiBody({ type: CreateGreetingDto })
  addLastGreeting(@Body() createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    return this.mailFormsService.addLastGreeting(createLastGreetingDto);
  }

  @Post('/suggestion')
  @ApiOperation({ summary: '멘트 제안하기 API' })
  @ApiBody({ type: CreateSuggestionDto })
  suggestGreeting(@Body() createSuggestionDto: CreateSuggestionDto): Promise<Suggestion> {
    return this.mailFormsService.suggestGreeting(createSuggestionDto);
  }
}
