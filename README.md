Desafio 4.Desarrollo de API de AWS AppSync v2
El desafío
Cree una API de Serverless Framework con AWS AppSync que admita la funcionalidad CRUD (crear, leer, actualizar, eliminar) *no utilice plantillas de mapeo directamente a DynamoDB desde AppSync y utilice la canalización CI/CD de GitHub Actions, AWS CodePipeline o Serverless Pro CI/CD.
Puede tomar capturas de pantalla de la configuración de CI/CD e incluirlas en el archivo README.
La CI/CD debe activar una implementación basada en un push git a la rama maestra que pasa e implementa la API de Serverless Framework de backend.
Requisitos
1.	Toda la infraestructura de AWS debe automatizarse con IAC utilizando Serverless Framework y CloudFormation según sea necesario
2.	La API de AppSync debe almacenar datos en DynamoDB
3.	Debe haber 4-5 lambdas que incluyan la siguiente funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) *no utilice plantillas de mapeo directamente a DynamoDB desde AppSync
4.	Construir la canalización de CI/CD para soportar implementaciones de múltiples etapas
5.	La plantilla debe estar completamente funcional y documentada.
6.	Un repositorio público de GitHub debe compartirse con confirmaciones frecuentes
7.	Se debe grabar un video ( www.loom.com ) de usted hablando sobre el código de la aplicación, IAC y cualquier área adicional que desee resaltar en su solución para demostrar habilidades adicionales.
Por favor, dedique a esto únicamente el tiempo que considere razonable.
Opcionalmente
Cree una interfaz con ReactJS y Material UI que use la biblioteca Amplify para conectarse a su API AppSync para la funcionalidad CRUD.






<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

<img width="1873" height="932" alt="Captura de pantalla 2025-10-17 080100creacion de branchdevmaingithub" src="https://github.com/user-attachments/assets/7cb717b9-4f5d-4045-aae5-4d0a1ed19b76" />
<img width="1572" height="936" alt="Captura de pantalla 2025-10-17 081618agreegararchivos arepositorio" src="https://github.com/user-attachments/assets/ca005c01-ea7c-4a1e-ba42-a5d154d0f265" />

## Usage
### Clonde Repository

<img width="1862" height="857" alt="image" src="https://github.com/user-attachments/assets/179f8008-8156-421b-ae74-bbc68e4e3713" />

### Deployment

```
$ serverless deploy

<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

```
$ serverless deploy

<img width="1308" height="720" alt="image" src="https://github.com/user-attachments/assets/7842b16f-bb29-49e2-b7bc-199863cc4386" />

<img width="1191" height="571" alt="Captura de pantalla 2025-10-16 193113deploystageprod" src="https://github.com/user-attachments/assets/8e97509f-f628-47a6-b1e1-c044b771b212" />

```

After deploying, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-http-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: serverless-http-api
stage: dev
region: us-east-1
stack: serverless-http-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  api: serverless-http-api-dev-hello
layers:
  None
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```




Which should result in response similar to the following (removed `input` content for brevity):

<img width="1681" height="733" alt="image" src="https://github.com/user-attachments/assets/22aa44db-fb94-460e-8ddb-6570931b9cb1" />



```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development


<img width="1413" height="240" alt="image" src="https://github.com/user-attachments/assets/804c00e6-2dd7-4ae9-ac73-e9d6177fb0eb" />




You can invoke your function locally by using the following command:

```bash
<img width="1388" height="298" alt="image" src="https://github.com/user-attachments/assets/ea727018-0729-482c-ab80-6b2e77f05b7f" />

serverless invoke local --function hello
```<img width="1485" height="240" alt="image" src="https://github.com/user-attachments/assets/b9ed174f-a31c-4642-bca3-6f1cad93dd2f" />


Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).






<img width="1308" height="720" alt="image" src="https://github.com/user-attachments/assets/7842b16f-bb29-49e2-b7bc-199863cc4386" />

```

After deploying, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-http-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: serverless-http-api
stage: dev
region: us-east-1
stack: serverless-http-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  api: serverless-http-api-dev-hello
layers:
  None
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```
Test Postman

<img width="1802" height="962" alt="Captura de pantalla 2025-10-16 202053getstagedev" src="https://github.com/user-attachments/assets/93cd7fac-9f28-4d5d-b5f2-7adba7480fb2" />

<img width="1401" height="907" alt="Captura de pantalla 2025-10-16 223929postamstagedevpost" src="https://github.com/user-attachments/assets/76fa823b-c3f5-4ac6-b885-64d9971a2051" />

<img width="1855" height="963" alt="Captura de pantalla 2025-10-16 194734getstagedev" src="https://github.com/user-attachments/assets/411adbd3-d6a0-4f30-8719-47ef36d80869" />

<img width="1423" height="961" alt="Captura de pantalla 2025-10-16 210845stageprod" src="https://github.com/user-attachments/assets/1b052978-6123-4c92-8f3e-9824292131e2" />


### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```<img width="1485" height="240" alt="image" src="https://github.com/user-attachments/assets/b9ed174f-a31c-4642-bca3-6f1cad93dd2f" />


Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
SECRET KEY


<img width="1823" height="900" alt="image" src="https://github.com/user-attachments/assets/e8ecc29c-25a6-4c5e-b895-00432eb7f32f" />

SECRET AND VARIABLES 
<img width="1847" height="852" alt="image" src="https://github.com/user-attachments/assets/7c68b1c3-ef10-434b-95ec-37e10ec73168" />

serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
