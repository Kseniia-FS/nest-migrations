import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const options: Record<string, any> = {
    cors: true,
  };
  const app = await NestFactory.create(AppModule, options);
  const configService = app.get(ConfigService);
  const serverPort = configService.get('SERVER_PORT', 3007);

  await app.listen(serverPort);
}
bootstrap()
  .then(() => {
    // do nothing
  })
  .catch((error) => {
    console.error(error);
  });
