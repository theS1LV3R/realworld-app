import { UserEntity } from '@/users/entities/user.entity';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface

    interface Request {
      user?: UserEntity;
    }
  }
}
