import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
const publicIndex980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
const publicIndex980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
publicIndex980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/'
*/
publicIndex980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicIndex980bb49ee7ae63891f1d891d2fbcf1c9.form = publicIndex980bb49ee7ae63891f1d891d2fbcf1c9Form
/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
const publicIndex28a20e3cf2f2785baabf7cebcdbf0553 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url(options),
    method: 'get',
})

publicIndex28a20e3cf2f2785baabf7cebcdbf0553.definition = {
    methods: ["get","head"],
    url: '/formations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url = (options?: RouteQueryOptions) => {
    return publicIndex28a20e3cf2f2785baabf7cebcdbf0553.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicIndex28a20e3cf2f2785baabf7cebcdbf0553.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicIndex28a20e3cf2f2785baabf7cebcdbf0553.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
const publicIndex28a20e3cf2f2785baabf7cebcdbf0553Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicIndex28a20e3cf2f2785baabf7cebcdbf0553Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicIndex
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicIndex28a20e3cf2f2785baabf7cebcdbf0553Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex28a20e3cf2f2785baabf7cebcdbf0553.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicIndex28a20e3cf2f2785baabf7cebcdbf0553.form = publicIndex28a20e3cf2f2785baabf7cebcdbf0553Form

export const publicIndex = {
    '/': publicIndex980bb49ee7ae63891f1d891d2fbcf1c9,
    '/formations': publicIndex28a20e3cf2f2785baabf7cebcdbf0553,
}

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
export const publicShow = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicShow.url(args, options),
    method: 'get',
})

publicShow.definition = {
    methods: ["get","head"],
    url: '/formations/{training}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
publicShow.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return publicShow.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
publicShow.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
publicShow.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicShow.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
const publicShowForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
publicShowForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicShow
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
publicShowForm.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicShow.form = publicShowForm

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
export const publicRead = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicRead.url(args, options),
    method: 'get',
})

publicRead.definition = {
    methods: ["get","head"],
    url: '/formations/{training}/read',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
publicRead.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return publicRead.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
publicRead.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicRead.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
publicRead.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicRead.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
const publicReadForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicRead.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
publicReadForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicRead.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicRead
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
publicReadForm.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicRead.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicRead.form = publicReadForm

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/formations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::index
* @see app/Http/Controllers/TrainingController.php:12
* @route '/dashboard/formations'
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
* @see \App\Http\Controllers\TrainingController::store
* @see app/Http/Controllers/TrainingController.php:47
* @route '/dashboard/formations'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/formations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TrainingController::store
* @see app/Http/Controllers/TrainingController.php:47
* @route '/dashboard/formations'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::store
* @see app/Http/Controllers/TrainingController.php:47
* @route '/dashboard/formations'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TrainingController::store
* @see app/Http/Controllers/TrainingController.php:47
* @route '/dashboard/formations'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TrainingController::store
* @see app/Http/Controllers/TrainingController.php:47
* @route '/dashboard/formations'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
export const show = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/formations/{training}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
show.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
show.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
show.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
const showForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
showForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:26
* @route '/dashboard/formations/{training}'
*/
showForm.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TrainingController::update
* @see app/Http/Controllers/TrainingController.php:70
* @route '/dashboard/formations/{training}'
*/
export const update = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/dashboard/formations/{training}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TrainingController::update
* @see app/Http/Controllers/TrainingController.php:70
* @route '/dashboard/formations/{training}'
*/
update.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::update
* @see app/Http/Controllers/TrainingController.php:70
* @route '/dashboard/formations/{training}'
*/
update.patch = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TrainingController::update
* @see app/Http/Controllers/TrainingController.php:70
* @route '/dashboard/formations/{training}'
*/
const updateForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TrainingController::update
* @see app/Http/Controllers/TrainingController.php:70
* @route '/dashboard/formations/{training}'
*/
updateForm.patch = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\TrainingController::destroy
* @see app/Http/Controllers/TrainingController.php:84
* @route '/dashboard/formations/{training}'
*/
export const destroy = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/formations/{training}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TrainingController::destroy
* @see app/Http/Controllers/TrainingController.php:84
* @route '/dashboard/formations/{training}'
*/
destroy.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::destroy
* @see app/Http/Controllers/TrainingController.php:84
* @route '/dashboard/formations/{training}'
*/
destroy.delete = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TrainingController::destroy
* @see app/Http/Controllers/TrainingController.php:84
* @route '/dashboard/formations/{training}'
*/
const destroyForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TrainingController::destroy
* @see app/Http/Controllers/TrainingController.php:84
* @route '/dashboard/formations/{training}'
*/
destroyForm.delete = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const TrainingController = { publicIndex, publicShow, publicRead, index, store, show, update, destroy }

export default TrainingController