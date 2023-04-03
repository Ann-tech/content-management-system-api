import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('/api/v1/posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public async getPosts(@Request() request: Request) {
        return this.postsService.getPosts()
    }

    @Post() 
    @UseGuards(AuthGuard())
    public async createPosts() {

    }
}
