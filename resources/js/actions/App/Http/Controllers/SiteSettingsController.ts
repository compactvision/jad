import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/site-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::index
* @see app/Http/Controllers/SiteSettingsController.php:11
* @route '/dashboard/site-settings'
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
* @see \App\Http\Controllers\SiteSettingsController::update
* @see app/Http/Controllers/SiteSettingsController.php:18
* @route '/dashboard/site-settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/dashboard/site-settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteSettingsController::update
* @see app/Http/Controllers/SiteSettingsController.php:18
* @route '/dashboard/site-settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingsController::update
* @see app/Http/Controllers/SiteSettingsController.php:18
* @route '/dashboard/site-settings'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::update
* @see app/Http/Controllers/SiteSettingsController.php:18
* @route '/dashboard/site-settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingsController::update
* @see app/Http/Controllers/SiteSettingsController.php:18
* @route '/dashboard/site-settings'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const SiteSettingsController = { index, update }

export default SiteSettingsController