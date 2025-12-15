import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::edit
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:27
* @route '/dashboard/profile'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::update
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:75
* @route '/dashboard/profile'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/dashboard/profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::update
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:75
* @route '/dashboard/profile'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::update
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:75
* @route '/dashboard/profile'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::update
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:75
* @route '/dashboard/profile'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Modules\Member\Infrastructure\Http\Controllers\ProfileController::update
* @see app/Modules/Member/Infrastructure/Http/Controllers/ProfileController.php:75
* @route '/dashboard/profile'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const ProfileController = { edit, update }

export default ProfileController