import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import showBac614 from './show'
/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
export const publicMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})

publicMethod.definition = {
    methods: ["get","head"],
    url: '/formations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicMethod.url = (options?: RouteQueryOptions) => {
    return publicMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicMethod.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
const publicMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
*/
publicMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::publicMethod
* @see app/Http/Controllers/TrainingController.php:19
* @route '/formations'
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
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
export const show = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/formations/{training}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
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
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
show.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
show.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
const showForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
*/
showForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::show
* @see app/Http/Controllers/TrainingController.php:33
* @route '/formations/{training}'
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
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
export const read = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: read.url(args, options),
    method: 'get',
})

read.definition = {
    methods: ["get","head"],
    url: '/formations/{training}/read',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
read.url = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return read.definition.url
            .replace('{training}', parsedArgs.training.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
read.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: read.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
read.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: read.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
const readForm = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: read.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
readForm.get = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: read.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TrainingController::read
* @see app/Http/Controllers/TrainingController.php:40
* @route '/formations/{training}/read'
*/
readForm.head = (args: { training: number | { id: number } } | [training: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: read.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

read.form = readForm

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

const formations = {
    public: Object.assign(publicMethod, publicMethod),
    show: Object.assign(show, showBac614),
    read: Object.assign(read, read),
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default formations