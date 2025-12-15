import MemberController from './MemberController'
import ProfileController from './ProfileController'

const Controllers = {
    MemberController: Object.assign(MemberController, MemberController),
    ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Controllers