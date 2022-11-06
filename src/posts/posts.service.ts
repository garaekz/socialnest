import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return (await this.postModel.create(createPostDto)).populate('user');
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().populate('user').exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).populate('user').exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    return (
      await this.postModel.findByIdAndUpdate(id, updatePostDto).exec()
    ).populate('user');
  }

  async remove(id: string) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
