import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
export const admin = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(args, options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/dashboard/formations/{training}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
admin.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { training: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { training: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            training: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        training: typeof args.training === 'object'
        ? args.training.id
        : args.training,
    }

    return admin.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
admin.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
admin.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
const adminForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
adminForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::admin
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
adminForm.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

admin.form = adminForm

const show = {
    admin: Object.assign(admin, admin),
}

export default show