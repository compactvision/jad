import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingsController::index
* @see app/Http/Controllers/SettingsController.php:10
* @route '/dashboard/settings'
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
* @see \App\Http\Controllers\SettingsController::notifications
* @see app/Http/Controllers/SettingsController.php:18
* @route '/dashboard/settings/notifications'
*/
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: notifications.url(options),
    method: 'patch',
})

notifications.definition = {
    methods: ["patch"],
    url: '/dashboard/settings/notifications',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\SettingsController::notifications
* @see app/Http/Controllers/SettingsController.php:18
* @route '/dashboard/settings/notifications'
*/
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::notifications
* @see app/Http/Controllers/SettingsController.php:18
* @route '/dashboard/settings/notifications'
*/
notifications.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: notifications.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\SettingsController::notifications
* @see app/Http/Controllers/SettingsController.php:18
* @route '/dashboard/settings/notifications'
*/
const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: notifications.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::notifications
* @see app/Http/Controllers/SettingsController.php:18
* @route '/dashboard/settings/notifications'
*/
notificationsForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: notifications.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

notifications.form = notificationsForm

/**
* @see \App\Http\Controllers\SettingsController::destroy
* @see app/Http/Controllers/SettingsController.php:32
* @route '/dashboard/settings/account'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/account',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SettingsController::destroy
* @see app/Http/Controllers/SettingsController.php:32
* @route '/dashboard/settings/account'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::destroy
* @see app/Http/Controllers/SettingsController.php:32
* @route '/dashboard/settings/account'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SettingsController::destroy
* @see app/Http/Controllers/SettingsController.php:32
* @route '/dashboard/settings/account'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingsController::destroy
* @see app/Http/Controllers/SettingsController.php:32
* @route '/dashboard/settings/account'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const settings = {
    index: Object.assign(index, index),
    notifications: Object.assign(notifications, notifications),
    destroy: Object.assign(destroy, destroy),
}

export default settings