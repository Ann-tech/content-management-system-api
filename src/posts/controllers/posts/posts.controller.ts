import { Controller, Get, Request } from '@nestjs/common';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('/api/v1/posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public async getPosts(@Request() request: Request) {
        return this.postsService.getPosts()
    }
}
