import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:18
* @route '/dashboard/members/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/members/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:18
* @route '/dashboard/members/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:18
* @route '/dashboard/members/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:18
* @route '/dashboard/members/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:18
* @route '/dashboard/members/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const MemberController = { store }

export default MemberController