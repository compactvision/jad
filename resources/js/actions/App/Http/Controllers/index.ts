import SettingsController from './SettingsController'
import RoleController from './RoleController'
import UserController from './UserController'
import SiteSettingsController from './SiteSettingsController'

const Controllers = {
    SettingsController: Object.assign(SettingsController, SettingsController),
    RoleController: Object.assign(RoleController, RoleController),
    UserController: Object.assign(UserController, UserController),
    SiteSettingsController: Object.assign(SiteSettingsController, SiteSettingsController),
}

export default Controllers