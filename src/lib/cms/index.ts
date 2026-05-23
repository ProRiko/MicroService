import type { ClientBlueprint } from '@/config/clients';
import local from './adapters/local';

export type CmsClient = ClientBlueprint;

export const adapters = {
  local
};

const cmsFacade = {
  adapters
};

export default cmsFacade;
