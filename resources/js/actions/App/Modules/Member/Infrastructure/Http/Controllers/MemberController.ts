import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
const storef7c6d16c1a1d3a178f9fe06a91e80f92 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef7c6d16c1a1d3a178f9fe06a91e80f92.url(options),
    method: 'post',
})

storef7c6d16c1a1d3a178f9fe06a91e80f92.definition = {
    methods: ["post"],
    url: '/become-member',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
storef7c6d16c1a1d3a178f9fe06a91e80f92.url = (options?: RouteQueryOptions) => {
    return storef7c6d16c1a1d3a178f9fe06a91e80f92.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
storef7c6d16c1a1d3a178f9fe06a91e80f92.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef7c6d16c1a1d3a178f9fe06a91e80f92.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
const storef7c6d16c1a1d3a178f9fe06a91e80f92Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef7c6d16c1a1d3a178f9fe06a91e80f92.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/become-member'
*/
storef7c6d16c1a1d3a178f9fe06a91e80f92Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef7c6d16c1a1d3a178f9fe06a91e80f92.url(options),
    method: 'post',
})

storef7c6d16c1a1d3a178f9fe06a91e80f92.form = storef7c6d16c1a1d3a178f9fe06a91e80f92Form
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/dashboard/members/store'
*/
const storec3e9f2b310ba20767a438743cf37f8ee = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec3e9f2b310ba20767a438743cf37f8ee.url(options),
    method: 'post',
})

storec3e9f2b310ba20767a438743cf37f8ee.definition = {
    methods: ["post"],
    url: '/dashboard/members/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/dashboard/members/store'
*/
storec3e9f2b310ba20767a438743cf37f8ee.url = (options?: RouteQueryOptions) => {
    return storec3e9f2b310ba20767a438743cf37f8ee.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/dashboard/members/store'
*/
storec3e9f2b310ba20767a438743cf37f8ee.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec3e9f2b310ba20767a438743cf37f8ee.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/dashboard/members/store'
*/
const storec3e9f2b310ba20767a438743cf37f8eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec3e9f2b310ba20767a438743cf37f8ee.url(options),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::store
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:73
* @route '/dashboard/members/store'
*/
storec3e9f2b310ba20767a438743cf37f8eeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec3e9f2b310ba20767a438743cf37f8ee.url(options),
    method: 'post',
})

storec3e9f2b310ba20767a438743cf37f8ee.form = storec3e9f2b310ba20767a438743cf37f8eeForm

export const store = {
    '/become-member': storef7c6d16c1a1d3a178f9fe06a91e80f92,
    '/dashboard/members/store': storec3e9f2b310ba20767a438743cf37f8ee,
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
export const publicIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

publicIndex.definition = {
    methods: ["get","head"],
    url: '/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicIndex.url = (options?: RouteQueryOptions) => {
    return publicIndex.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicIndex.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
const publicIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::publicIndex
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:53
* @route '/members'
*/
publicIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicIndex.form = publicIndexForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/members',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::index
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:22
* @route '/dashboard/members'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
* @route '/dashboard/members/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
* @route '/dashboard/members/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
* @route '/dashboard/members/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
* @route '/dashboard/members/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::show
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:111
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:82
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:82
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:82
* @route '/dashboard/members/{id}/approve'
*/
approve.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::approve
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:82
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
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:82
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
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::toggleVisibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:98
* @route '/dashboard/members/{id}/visibility'
*/
export const toggleVisibility = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibility.url(args, options),
    method: 'patch',
})

toggleVisibility.definition = {
    methods: ["patch"],
    url: '/dashboard/members/{id}/visibility',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::toggleVisibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:98
* @route '/dashboard/members/{id}/visibility'
*/
toggleVisibility.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return toggleVisibility.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::toggleVisibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:98
* @route '/dashboard/members/{id}/visibility'
*/
toggleVisibility.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibility.url(args, options),
    method: 'patch',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::toggleVisibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:98
* @route '/dashboard/members/{id}/visibility'
*/
const toggleVisibilityForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\MemberController::toggleVisibility
* @see app/Modules/Member/Infrastructure/Http/Controllers/MemberController.php:98
* @route '/dashboard/members/{id}/visibility'
*/
toggleVisibilityForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleVisibility.form = toggleVisibilityForm

const MemberController = { store, publicIndex, index, show, approve, toggleVisibility }

export default MemberController