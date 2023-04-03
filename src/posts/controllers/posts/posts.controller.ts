import { Controller } from '@nestjs/common';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('/api/v1/posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
}
