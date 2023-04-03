import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { POSTEntity } from 'src/typeorm/entities/post.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(POSTEntity)
        private readonly postsRepo: Repository<POSTEntity>, ) {}
    async getPosts() {
        return await this.postsRepo.find({}) 
    }
}
