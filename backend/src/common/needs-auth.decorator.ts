import { SetMetadata } from '@nestjs/common';

export const NEEDS_AUTH_KEY = 'needsAuth';
export const NeedsAuth = () => SetMetadata(NEEDS_AUTH_KEY, true);
export default NeedsAuth;
