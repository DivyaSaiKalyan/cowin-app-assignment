import { SetMetadata } from '@nestjs/common';
/**
 * This variable is nothing but a custom decorator this is used to find the roles related info
 * @param roles
 * @returns
 */
export const Roles = (roles) => SetMetadata('roles', roles);
