import { Injectable } from "@nestjs/common/decorators/core";

@Injectable()
export class AppService {

  getmessage(): string {

    return `Books CRUD API - Running on port 8080`;

  };

};