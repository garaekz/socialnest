import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Match } from '../match.decorator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@socialnest.test',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
  })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: '123456',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    description: 'The password confirmation of the user',
    example: '123456',
  })
  @IsNotEmpty()
  @Match('password')
  readonly passwordConfirmation: string;
}
