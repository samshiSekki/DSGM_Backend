import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class SpellCheckerService {
    async getPassportKey() {
        const response = await axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=맞춤법검사기');
        const match = response.data.match(/passportKey=([a-zA-Z0-9]+)/);
        if (match != null) {
            return decodeURIComponent(match[1]);
        }
    }
}