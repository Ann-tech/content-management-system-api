import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './typeorm/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { POSTEntity } from './typeorm/entities/post.entity';
import { PostsController } from './posts/controllers/posts/posts.controller';
import { PostsModule } from './posts/posts.module';

ConfigModule.forRoot()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [UserEntity, POSTEntity],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
