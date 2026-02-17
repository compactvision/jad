import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
export const publicMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})

publicMethod.definition = {
    methods: ["get","head"],
    url: '/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicMethod.url = (options?: RouteQueryOptions) => {
    return publicMethod.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicMethod.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
const publicMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicMethod
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicMethod.form = publicMethodForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:77
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:77
* @route '/dashboard/members/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:77
* @route '/dashboard/members/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:77
* @route '/dashboard/members/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:77
* @route '/dashboard/members/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/members/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:115
* @route '/dashboard/members/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:86
* @route '/dashboard/members/{id}/approve'
*/
export const approve = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

approve.definition = {
    methods: ["patch"],
    url: '/dashboard/members/{id}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:86
* @route '/dashboard/members/{id}/approve'
*/
approve.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return approve.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:86
* @route '/dashboard/members/{id}/approve'
*/
approve.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:86
* @route '/dashboard/members/{id}/approve'
*/
const approveForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:86
* @route '/dashboard/members/{id}/approve'
*/
approveForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::visibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:102
* @route '/dashboard/members/{id}/visibility'
*/
export const visibility = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: visibility.url(args, options),
    method: 'patch',
})

visibility.definition = {
    methods: ["patch"],
    url: '/dashboard/members/{id}/visibility',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::visibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:102
* @route '/dashboard/members/{id}/visibility'
*/
visibility.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return visibility.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::visibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:102
* @route '/dashboard/members/{id}/visibility'
*/
visibility.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: visibility.url(args, options),
    method: 'patch',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::visibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:102
* @route '/dashboard/members/{id}/visibility'
*/
const visibilityForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: visibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::visibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:102
* @route '/dashboard/members/{id}/visibility'
*/
visibilityForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: visibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

visibility.form = visibilityForm

const members = {
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    approve: Object.assign(approve, approve),
    visibility: Object.assign(visibility, visibility),
}

export default members