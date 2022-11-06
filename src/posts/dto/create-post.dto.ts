import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'The User ID of the post',
    example: 'randomObjectId',
  })
  user: string;

  @ApiProperty({
    description: 'A tweet like post',
    example:
      'This is a tweet, or a socialnest post form my workplace followers :3',
  })
  @IsNotEmpty()
  readonly content: string;
}
