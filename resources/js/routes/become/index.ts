import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/become-member',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const become = {
    store: Object.assign(store, store),
}

export default become