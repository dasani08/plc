import * as dotenv from 'dotenv';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export class ConfigService {
  constructor() {
    const nodeEnv = this.nodeEnv;
    dotenv.config({
      path: `.${nodeEnv}.env`,
    });

    // Replace \\n with \n to support multiline strings in AWS
    for (const envName of Object.keys(process.env)) {
      process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
    }
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development';
  }

  get mongoConfig(): MongooseModuleOptions {
    return {
      uri: `mongodb://${this.get('MONGO_DB_HOST')}`,
      dbName: this.get('MONGO_DB_NAME'),
      user: this.get('MONGO_DB_USER'),
      pass: this.get('MONGO_DB_PASS'),
    };
  }
}
