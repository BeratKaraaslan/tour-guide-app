import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'AWS Elastic Beanstalk && Codepipeline CI/CD!';
  }
}
