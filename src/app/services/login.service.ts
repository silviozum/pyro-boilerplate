import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class LoginService {
  constructor(private readonly userRepository: UserRepository) {}
  login(email: string, password: string) {
    return { email, password };
  }
}