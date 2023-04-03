import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { POSTEntity } from 'src/typeorm/entities/post.entity';
import { UsersModule } from 'src/users/users.module';
import { PostsController } from './controllers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forFeature([POSTEntity])
  ],
  exports: [PostsService],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
