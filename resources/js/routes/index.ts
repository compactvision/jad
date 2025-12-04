import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see routes/web.php:7
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:7
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:7
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:7
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:7
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:8
* @route '/become-member'
*/
export const become = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: become.url(options),
    method: 'get',
})

become.definition = {
    methods: ["get","head"],
    url: '/become-member',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:8
* @route '/become-member'
*/
become.url = (options?: RouteQueryOptions) => {
    return become.definition.url + queryParams(options)
}

/**
* @see routes/web.php:8
* @route '/become-member'
*/
become.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: become.url(options),
    method: 'get',
})

/**
* @see routes/web.php:8
* @route '/become-member'
*/
become.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: become.url(options),
    method: 'head',
})

/**
* @see routes/web.php:8
* @route '/become-member'
*/
const becomeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: become.url(options),
    method: 'get',
})

/**
* @see routes/web.php:8
* @route '/become-member'
*/
becomeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: become.url(options),
    method: 'get',
})

/**
* @see routes/web.php:8
* @route '/become-member'
*/
becomeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: become.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

become.form = becomeForm

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
export const fibonacci = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fibonacci.url(options),
    method: 'get',
})

fibonacci.definition = {
    methods: ["get","head"],
    url: '/jad-fibonacci',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
fibonacci.url = (options?: RouteQueryOptions) => {
    return fibonacci.definition.url + queryParams(options)
}

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
fibonacci.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fibonacci.url(options),
    method: 'get',
})

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
fibonacci.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fibonacci.url(options),
    method: 'head',
})

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
const fibonacciForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fibonacci.url(options),
    method: 'get',
})

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
fibonacciForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fibonacci.url(options),
    method: 'get',
})

/**
* @see routes/web.php:9
* @route '/jad-fibonacci'
*/
fibonacciForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fibonacci.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fibonacci.form = fibonacciForm

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
export const legalNotice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legalNotice.url(options),
    method: 'get',
})

legalNotice.definition = {
    methods: ["get","head"],
    url: '/legal-notice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
legalNotice.url = (options?: RouteQueryOptions) => {
    return legalNotice.definition.url + queryParams(options)
}

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
legalNotice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legalNotice.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
legalNotice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: legalNotice.url(options),
    method: 'head',
})

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
const legalNoticeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legalNotice.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
legalNoticeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legalNotice.url(options),
    method: 'get',
})

/**
* @see routes/web.php:10
* @route '/legal-notice'
*/
legalNoticeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legalNotice.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

legalNotice.form = legalNoticeForm
