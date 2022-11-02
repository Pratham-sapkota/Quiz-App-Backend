import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //integration swagger

  const options = new DocumentBuilder()
    .setTitle('API for QUIZ-APP ')
    .setVersion('V1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  const optionsSetup = {
    explorer: false,
    customCss:
      '.swagger-ui .models, .topbar {\n' +
      '    display: none !important;\n' +
      '}\n' +
      '.topbar, .version-stamp {\n' +
      '    display: none !important;\n' +
      '}\n' +
      '.swagger-ui .scheme-container {\n' +
      '    padding: 5px 0;\n' +
      '}\n' +
      '.swagger-ui .info {\n' +
      '    margin: 10px 0 !important;\n' +
      '}',
  };
  //.setup() exposes the API
  SwaggerModule.setup('api/v1/docs', app, document, optionsSetup);
  await app.listen(parseInt(process.env.APP_PORT) || 3000);
}

bootstrap()
  .then(() => {
    console.log(process.env.APP_PORT);
    console.log(`Server running on http://localhost:${process.env.APP_PORT}/`);
    console.log(
      `For API documentation on http://localhost:${process.env.APP_PORT}/api/v1/docs`,
    );
  })
  .catch((error) => {
    console.log('Error: ', error.measure || error || error.message);
  });
