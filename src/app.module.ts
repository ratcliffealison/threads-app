import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

const uri =
  'mongodb+srv://threads-app-user:16dEsF1cskcsF6yz@cluster0.ebdq8ep.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0';

if (!uri) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

@Module({
  imports: [UsersModule, CommentsModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
