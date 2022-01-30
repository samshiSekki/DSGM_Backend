import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/count')
  getCount() {
    let expireDate = new Date(); // 현재 날짜 객체
    // let expireDate3 = new Date().toUTCString(); // 현재 날짜 객체

    // let expireDate2 = new Date(); // 현재 날짜 객체

    // console.log(expireDate, expireDate2, expireDate3);
    // // let date = expireDate.getHours();
    // // let time = expireDate.getMinutes();
    // // let min = expireDate.getSeconds();
    // // console.log(date, time, min);
    expireDate.setMonth(expireDate.getMonth()+1);

  }
}
