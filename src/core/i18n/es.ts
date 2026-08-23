// Shared
import { APP } from './shared/app.es';
import { ERROR } from './shared/error.es';
import { COMMON } from './shared/common.es';
import { TRANSLATOR } from './shared/translator.es';
import { VALIDATION } from './shared/validation.es';
import { MENUOPTIONS } from './shared/menu-options.es';
// Modules
import { HOME } from './modules/home.es';
import { MODULES } from './modules/modules.es';
import { SETTINGS } from './modules/settings.es';
import { USERS } from './modules/users.es';
// Add additional modules here


// en-US
export const locale = {
  lang: 'es',
  data: {
    // Shared
    APP: APP,
    COMMON: COMMON,
    ERROR: ERROR,
    MENUOPTIONS: MENUOPTIONS,
    TRANSLATOR: TRANSLATOR,
    VALIDATION: VALIDATION,
    // Modules
    HOME: HOME,
    MODULES: MODULES,
    SETTINGS: SETTINGS,
    USERS: USERS,
    // Add additional modules here
  }
};
