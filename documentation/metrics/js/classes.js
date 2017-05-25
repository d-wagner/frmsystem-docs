var classes = [
    {
        "name": "App\\Console\\Kernel",
        "interface": false,
        "methods": [
            {
                "name": "schedule",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commands",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Console\\Kernel",
            "Illuminate\\Console\\Scheduling\\Schedule"
        ],
        "lcom": 2,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 18,
        "loc": 30,
        "lloc": 12,
        "mi": 120.82,
        "mIwoC": 74.22,
        "commentWeight": 46.6,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 0.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "pageRank": 0.05,
        "afferentCoupling": 10,
        "efferentCoupling": 2,
        "instability": 0.17,
        "violations": {}
    },
    {
        "name": "App\\CustomProperty",
        "interface": false,
        "methods": [
            {
                "name": "user",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 1,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0.5,
        "effort": 7.75,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 1,
        "number_operands": 5,
        "number_operators_unique": 1,
        "number_operands_unique": 5,
        "cloc": 13,
        "loc": 24,
        "lloc": 11,
        "mi": 114.25,
        "mIwoC": 68.81,
        "commentWeight": 45.44,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Exceptions\\Handler",
        "interface": false,
        "methods": [
            {
                "name": "report",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unauthenticated",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Foundation\\Exceptions\\Handler",
            "Exception",
            "parent",
            "Exception",
            "parent",
            "Illuminate\\Auth\\AuthenticationException"
        ],
        "lcom": 3,
        "length": 17,
        "vocabulary": 8,
        "volume": 51,
        "difficulty": 2.17,
        "effort": 110.5,
        "level": 0.46,
        "bugs": 0.02,
        "time": 6,
        "intelligentContent": 23.54,
        "number_operators": 4,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 27,
        "loc": 47,
        "lloc": 20,
        "mi": 105.51,
        "mIwoC": 59.39,
        "commentWeight": 46.12,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.93,
        "relativeSystemComplexity": 16.93,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 2.8,
        "totalSystemComplexity": 50.8,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 15,
        "loc": 24,
        "lloc": 9,
        "mi": 123.98,
        "mIwoC": 76.94,
        "commentWeight": 47.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\LoginController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "credentials",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Http\\Request"
        ],
        "lcom": 2,
        "length": 13,
        "vocabulary": 11,
        "volume": 44.97,
        "difficulty": 0.6,
        "effort": 26.98,
        "level": 1.67,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 74.95,
        "number_operators": 1,
        "number_operands": 12,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 23,
        "loc": 37,
        "lloc": 14,
        "mi": 110.27,
        "mIwoC": 63.29,
        "commentWeight": 46.98,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 1.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 3.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\RegisterController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteUnconfirmed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "verify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Support\\Facades\\Validator",
            "App\\User",
            "Illuminate\\Http\\Request",
            "DB",
            "App\\User",
            "App\\Mail\\EmailVerification",
            "Mail",
            "DB",
            "DB",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Log",
            "App\\User",
            "Illuminate\\Support\\Facades\\Log",
            "Illuminate\\Support\\Facades\\Log",
            "Illuminate\\Support\\Facades\\Log",
            "App\\User",
            "Illuminate\\Support\\Facades\\Auth"
        ],
        "lcom": 4,
        "length": 115,
        "vocabulary": 44,
        "volume": 627.83,
        "difficulty": 10.93,
        "effort": 6861.34,
        "level": 0.09,
        "bugs": 0.21,
        "time": 381,
        "intelligentContent": 57.45,
        "number_operators": 30,
        "number_operands": 85,
        "number_operators_unique": 9,
        "number_operands_unique": 35,
        "cloc": 42,
        "loc": 110,
        "lloc": 68,
        "mi": 80.51,
        "mIwoC": 39.63,
        "commentWeight": 40.88,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 324,
        "relativeDataComplexity": 0.36,
        "relativeSystemComplexity": 324.36,
        "totalStructuralComplexity": 1944,
        "totalDataComplexity": 2.16,
        "totalSystemComplexity": 1946.16,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 18,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 3,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 20,
        "loc": 30,
        "lloc": 10,
        "mi": 120.99,
        "mIwoC": 73.31,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Controller",
        "interface": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Routing\\Controller"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 5,
        "lloc": 5,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "pageRank": 0.17,
        "afferentCoupling": 7,
        "efferentCoupling": 1,
        "instability": 0.13,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\EditProfileController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "defaultValidator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getView",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateOrDeleteOrCreate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createCustomProperty",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateUserData",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateCustomData",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteCustomProperty",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Support\\Facades\\Validator",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Auth"
        ],
        "lcom": 3,
        "length": 161,
        "vocabulary": 56,
        "volume": 934.98,
        "difficulty": 9.07,
        "effort": 8481.64,
        "level": 0.11,
        "bugs": 0.31,
        "time": 471,
        "intelligentContent": 103.07,
        "number_operators": 34,
        "number_operands": 127,
        "number_operators_unique": 7,
        "number_operands_unique": 49,
        "cloc": 12,
        "loc": 95,
        "lloc": 83,
        "mi": 62.69,
        "mIwoC": 36.53,
        "commentWeight": 26.16,
        "kanDefect": 1.24,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 0.39,
        "relativeSystemComplexity": 361.39,
        "totalStructuralComplexity": 2888,
        "totalDataComplexity": 3.1,
        "totalSystemComplexity": 2891.1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 11,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\HomeController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 2,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0.5,
        "effort": 4,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 10,
        "loc": 22,
        "lloc": 12,
        "mi": 113.23,
        "mIwoC": 70,
        "commentWeight": 43.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\RelationshipController",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getView",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findOrEngage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Http\\Request",
            "DB",
            "Illuminate\\Support\\Facades\\Auth",
            "App\\User",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Support\\Facades\\Auth",
            "App\\User",
            "App\\User"
        ],
        "lcom": 3,
        "length": 85,
        "vocabulary": 31,
        "volume": 421.11,
        "difficulty": 5.77,
        "effort": 2429.46,
        "level": 0.17,
        "bugs": 0.14,
        "time": 135,
        "intelligentContent": 72.99,
        "number_operators": 25,
        "number_operands": 60,
        "number_operators_unique": 5,
        "number_operands_unique": 26,
        "cloc": 17,
        "loc": 65,
        "lloc": 48,
        "mi": 80.28,
        "mIwoC": 44.68,
        "commentWeight": 35.6,
        "kanDefect": 0.87,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.38,
        "relativeSystemComplexity": 169.38,
        "totalStructuralComplexity": 507,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 508.14,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 11,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Kernel",
        "interface": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Kernel"
        ],
        "lcom": 0,
        "length": 10,
        "vocabulary": 9,
        "volume": 31.7,
        "difficulty": 0,
        "effort": 0,
        "level": 1.8,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 57.06,
        "number_operators": 0,
        "number_operands": 10,
        "number_operators_unique": 0,
        "number_operands_unique": 9,
        "cloc": 19,
        "loc": 26,
        "lloc": 7,
        "mi": 119.41,
        "mIwoC": 70.92,
        "commentWeight": 48.49,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\EncryptCookies",
        "interface": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Cookie\\Middleware\\EncryptCookies"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\RedirectIfAuthenticated",
        "interface": false,
        "methods": [
            {
                "name": "handle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Closure",
            "Illuminate\\Support\\Facades\\Auth"
        ],
        "lcom": 1,
        "length": 10,
        "vocabulary": 6,
        "volume": 25.85,
        "difficulty": 1.75,
        "effort": 45.24,
        "level": 0.57,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 14.77,
        "number_operators": 3,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 8,
        "loc": 19,
        "lloc": 11,
        "mi": 109.34,
        "mIwoC": 67.12,
        "commentWeight": 42.21,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 5.67,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1.67,
        "totalSystemComplexity": 5.67,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\VerifyCsrfToken",
        "interface": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Mail\\EmailVerification",
        "interface": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "build",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Mail\\Mailable",
            "App\\User"
        ],
        "lcom": 2,
        "length": 7,
        "vocabulary": 5,
        "volume": 16.25,
        "difficulty": 1.67,
        "effort": 27.09,
        "level": 0.6,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 9.75,
        "number_operators": 2,
        "number_operands": 5,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 10,
        "loc": 24,
        "lloc": 14,
        "mi": 108.46,
        "mIwoC": 66.39,
        "commentWeight": 42.07,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 1.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 3.5,
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AppServiceProvider",
        "interface": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "lcom": 2,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 10,
        "loc": 22,
        "lloc": 12,
        "mi": 214.23,
        "mIwoC": 171,
        "commentWeight": 43.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AuthServiceProvider",
        "interface": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 3,
        "volume": 4.75,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 9.51,
        "number_operators": 0,
        "number_operands": 3,
        "number_operators_unique": 0,
        "number_operands_unique": 3,
        "cloc": 10,
        "loc": 20,
        "lloc": 10,
        "mi": 117.77,
        "mIwoC": 73.31,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\BroadcastServiceProvider",
        "interface": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "Illuminate\\Support\\Facades\\Broadcast",
            "Illuminate\\Support\\Facades\\Broadcast"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 6,
        "volume": 23.26,
        "difficulty": 1.75,
        "effort": 40.71,
        "level": 0.57,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 13.29,
        "number_operators": 2,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 8,
        "loc": 19,
        "lloc": 11,
        "mi": 109.79,
        "mIwoC": 67.58,
        "commentWeight": 42.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\EventServiceProvider",
        "interface": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider",
            "parent"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 10,
        "loc": 20,
        "lloc": 10,
        "mi": 120.4,
        "mIwoC": 75.94,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\RouteServiceProvider",
        "interface": false,
        "methods": [
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "map",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapWebRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mapApiRoutes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Support\\Providers\\RouteServiceProvider",
            "parent",
            "Illuminate\\Support\\Facades\\Route",
            "Illuminate\\Support\\Facades\\Route"
        ],
        "lcom": 2,
        "length": 17,
        "vocabulary": 10,
        "volume": 56.47,
        "difficulty": 0,
        "effort": 0,
        "level": 1.18,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 66.44,
        "number_operators": 0,
        "number_operands": 17,
        "number_operators_unique": 0,
        "number_operands_unique": 10,
        "cloc": 31,
        "loc": 59,
        "lloc": 28,
        "mi": 101.1,
        "mIwoC": 56.03,
        "commentWeight": 45.07,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 16,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 64,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Relationship",
        "interface": false,
        "methods": [
            {
                "name": "user",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sharedProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 2,
        "length": 29,
        "vocabulary": 27,
        "volume": 137.89,
        "difficulty": 0.52,
        "effort": 71.6,
        "level": 1.93,
        "bugs": 0.05,
        "time": 4,
        "intelligentContent": 265.57,
        "number_operators": 2,
        "number_operands": 27,
        "number_operators_unique": 1,
        "number_operands_unique": 26,
        "cloc": 1,
        "loc": 14,
        "lloc": 13,
        "mi": 80.7,
        "mIwoC": 60.58,
        "commentWeight": 20.12,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 1.33,
        "totalSystemComplexity": 9.33,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\SharedProperty",
        "interface": false,
        "methods": [
            {
                "name": "relationship",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "lcom": 1,
        "length": 5,
        "vocabulary": 5,
        "volume": 11.61,
        "difficulty": 0.5,
        "effort": 5.8,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 0,
        "loc": 9,
        "lloc": 9,
        "mi": 71.59,
        "mIwoC": 71.59,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\User",
        "interface": false,
        "methods": [
            {
                "name": "verified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "customProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "relationships",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Auth\\User"
        ],
        "lcom": 2,
        "length": 38,
        "vocabulary": 31,
        "volume": 188.26,
        "difficulty": 1.17,
        "effort": 220.72,
        "level": 0.85,
        "bugs": 0.06,
        "time": 12,
        "intelligentContent": 160.57,
        "number_operators": 4,
        "number_operands": 34,
        "number_operators_unique": 2,
        "number_operands_unique": 29,
        "cloc": 21,
        "loc": 42,
        "lloc": 21,
        "mi": 99.55,
        "mIwoC": 55.09,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 14,
        "pageRank": 0.06,
        "afferentCoupling": 8,
        "efferentCoupling": 1,
        "instability": 0.11,
        "violations": {}
    },
    {
        "name": "CreateUsersTable",
        "interface": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "lcom": 2,
        "length": 58,
        "vocabulary": 29,
        "volume": 281.76,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0.09,
        "time": 0,
        "intelligentContent": 281.76,
        "number_operators": 0,
        "number_operands": 58,
        "number_operators_unique": 0,
        "number_operands_unique": 29,
        "cloc": 13,
        "loc": 54,
        "lloc": 41,
        "mi": 81.98,
        "mIwoC": 47.53,
        "commentWeight": 34.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 81,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 162,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreatePasswordResetsTable",
        "interface": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "lcom": 2,
        "length": 9,
        "vocabulary": 5,
        "volume": 20.9,
        "difficulty": 0,
        "effort": 0,
        "level": 1.11,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 0,
        "number_operands": 9,
        "number_operators_unique": 0,
        "number_operands_unique": 5,
        "cloc": 10,
        "loc": 26,
        "lloc": 16,
        "mi": 105.34,
        "mIwoC": 64.36,
        "commentWeight": 40.98,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 25,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 50,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateCustomPropertiesTable",
        "interface": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "lcom": 2,
        "length": 15,
        "vocabulary": 8,
        "volume": 45,
        "difficulty": 0,
        "effort": 0,
        "level": 1.07,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 48,
        "number_operators": 0,
        "number_operands": 15,
        "number_operators_unique": 0,
        "number_operands_unique": 8,
        "cloc": 10,
        "loc": 29,
        "lloc": 19,
        "mi": 99.86,
        "mIwoC": 60.39,
        "commentWeight": 39.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 49,
        "totalStructuralComplexity": 98,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 98,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateRelationshipsTable",
        "interface": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "lcom": 2,
        "length": 53,
        "vocabulary": 26,
        "volume": 249.12,
        "difficulty": 0,
        "effort": 0,
        "level": 0.98,
        "bugs": 0.08,
        "time": 0,
        "intelligentContent": 244.42,
        "number_operators": 0,
        "number_operands": 53,
        "number_operators_unique": 0,
        "number_operands_unique": 26,
        "cloc": 10,
        "loc": 49,
        "lloc": 39,
        "mi": 80.58,
        "mIwoC": 48.38,
        "commentWeight": 32.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 36,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 72,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CreateSharedPropertiesTable",
        "interface": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "lcom": 2,
        "length": 11,
        "vocabulary": 5,
        "volume": 25.54,
        "difficulty": 0,
        "effort": 0,
        "level": 0.91,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 23.22,
        "number_operators": 0,
        "number_operands": 11,
        "number_operators_unique": 0,
        "number_operands_unique": 5,
        "cloc": 10,
        "loc": 28,
        "lloc": 18,
        "mi": 102.59,
        "mIwoC": 62.63,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 16,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 32,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CustomPropertyTableSeeder",
        "interface": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Faker\\Factory",
            "DB",
            "DB"
        ],
        "lcom": 1,
        "length": 36,
        "vocabulary": 21,
        "volume": 158.12,
        "difficulty": 3.29,
        "effort": 520.88,
        "level": 0.3,
        "bugs": 0.05,
        "time": 29,
        "intelligentContent": 48,
        "number_operators": 8,
        "number_operands": 28,
        "number_operators_unique": 4,
        "number_operands_unique": 17,
        "cloc": 6,
        "loc": 19,
        "lloc": 13,
        "mi": 98.27,
        "mIwoC": 60.03,
        "commentWeight": 38.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 49,
        "totalStructuralComplexity": 49,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 49,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DatabaseSeeder",
        "interface": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 5,
        "loc": 14,
        "lloc": 9,
        "mi": 210.96,
        "mIwoC": 171,
        "commentWeight": 39.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 1,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "UsersTableSeeder",
        "interface": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "Faker\\Factory",
            "DB",
            "DB"
        ],
        "lcom": 1,
        "length": 85,
        "vocabulary": 44,
        "volume": 464.05,
        "difficulty": 3.75,
        "effort": 1740.19,
        "level": 0.27,
        "bugs": 0.15,
        "time": 97,
        "intelligentContent": 123.75,
        "number_operators": 10,
        "number_operands": 75,
        "number_operators_unique": 4,
        "number_operands_unique": 40,
        "cloc": 8,
        "loc": 28,
        "lloc": 20,
        "mi": 89.38,
        "mIwoC": 52.54,
        "commentWeight": 36.83,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 64,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 64,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App",
        "interface": false,
        "methods": [
            {
                "name": "version",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bootstrapWith",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "afterLoadingEnvironment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "beforeBootstrapping",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "afterBootstrapping",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasBeenBootstrapped",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setBasePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "basePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bootstrapPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "databasePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDatabasePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "langPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "publicPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "storagePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useStoragePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resourcePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "environmentPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useEnvironmentPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadEnvironmentFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "environmentFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "environmentFilePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "environment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLocal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "detectEnvironment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runningInConsole",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runningUnitTests",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerConfiguredProviders",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveProviderClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadDeferredProviders",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadDeferredProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerDeferredProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bound",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBooted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "booting",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "booted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shouldSkipMiddleware",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configurationIsCached",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCachedConfigPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "routesAreCached",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCachedRoutesPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCachedCompilePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCachedServicesPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDownForMaintenance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "abort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "terminating",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "terminate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLoadedProviders",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeferredServices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDeferredServices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addDeferredServices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDeferredService",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureMonologUsing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMonologConfigurator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMonologConfigurator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerCoreContainerAliases",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "when",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolved",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addContextualBinding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindIf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "singleton",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "share",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tagged",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rebinding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "refresh",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "wrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "factory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "build",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolving",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "afterResolving",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isShared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAlias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forgetInstance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forgetInstances",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setInstance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetUnset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 99,
        "nbMethods": 99,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 99,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\App",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application",
            "Illuminate\\Foundation\\Application"
        ],
        "lcom": 99,
        "length": 247,
        "vocabulary": 40,
        "volume": 1314.52,
        "difficulty": 2.31,
        "effort": 3033.5,
        "level": 0.43,
        "bugs": 0.44,
        "time": 169,
        "intelligentContent": 569.62,
        "number_operators": 67,
        "number_operands": 180,
        "number_operators_unique": 1,
        "number_operands_unique": 39,
        "cloc": 720,
        "loc": 1120,
        "lloc": 400,
        "mi": 68.59,
        "mIwoC": 21.27,
        "commentWeight": 47.32,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 33.95,
        "relativeSystemComplexity": 34.95,
        "totalStructuralComplexity": 99,
        "totalDataComplexity": 3361,
        "totalSystemComplexity": 3460,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 100,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Artisan",
        "interface": false,
        "methods": [
            {
                "name": "handle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "terminate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "command",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerCommand",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bootstrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setArtisan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Artisan",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel",
            "App\\Console\\Kernel"
        ],
        "lcom": 10,
        "length": 29,
        "vocabulary": 9,
        "volume": 91.93,
        "difficulty": 1.5,
        "effort": 137.89,
        "level": 0.67,
        "bugs": 0.03,
        "time": 8,
        "intelligentContent": 61.29,
        "number_operators": 5,
        "number_operands": 24,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 82,
        "loc": 126,
        "lloc": 44,
        "mi": 97.71,
        "mIwoC": 50.27,
        "commentWeight": 47.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.1,
        "relativeSystemComplexity": 4.1,
        "totalStructuralComplexity": 10,
        "totalDataComplexity": 31,
        "totalSystemComplexity": 41,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 11,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Auth",
        "interface": false,
        "methods": [
            {
                "name": "guard",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createSessionDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createTokenDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shouldUse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "viaRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveUsersUsing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "provider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createUserProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "user",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "id",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "once",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "basic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "onceBasic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attempt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "attempting",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "login",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loginUsingId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "onceUsingId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCookieJar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCookieJar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setProvider",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastAttempted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRecallerName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "viaRemember",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "guest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "authenticate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 42,
        "nbMethods": 42,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 42,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\AuthManager",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard",
            "Illuminate\\Auth\\SessionGuard"
        ],
        "lcom": 42,
        "length": 106,
        "vocabulary": 18,
        "volume": 442.01,
        "difficulty": 2.12,
        "effort": 936.03,
        "level": 0.47,
        "bugs": 0.15,
        "time": 52,
        "intelligentContent": 208.73,
        "number_operators": 34,
        "number_operands": 72,
        "number_operators_unique": 1,
        "number_operands_unique": 17,
        "cloc": 290,
        "loc": 462,
        "lloc": 172,
        "mi": 79.66,
        "mIwoC": 32.58,
        "commentWeight": 47.08,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 11.61,
        "relativeSystemComplexity": 15.61,
        "totalStructuralComplexity": 168,
        "totalDataComplexity": 487.67,
        "totalSystemComplexity": 655.67,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 43,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Blade",
        "interface": false,
        "methods": [
            {
                "name": "compile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compileString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compileEchoDefaults",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stripParentheses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "directive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCustomDirectives",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRawTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRawTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContentTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEscapedContentTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContentTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEscapedContentTags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEchoFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCompiledPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExpired",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 19,
        "nbMethods": 19,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 19,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Blade",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler",
            "Illuminate\\View\\Compilers\\BladeCompiler"
        ],
        "lcom": 19,
        "length": 47,
        "vocabulary": 11,
        "volume": 162.59,
        "difficulty": 1.8,
        "effort": 292.67,
        "level": 0.56,
        "bugs": 0.05,
        "time": 16,
        "intelligentContent": 90.33,
        "number_operators": 11,
        "number_operands": 36,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 134,
        "loc": 214,
        "lloc": 80,
        "mi": 89.92,
        "mIwoC": 42.87,
        "commentWeight": 47.06,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 5.97,
        "relativeSystemComplexity": 6.97,
        "totalStructuralComplexity": 19,
        "totalDataComplexity": 113.5,
        "totalSystemComplexity": 132.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 20,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Bus",
        "interface": false,
        "methods": [
            {
                "name": "dispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatchNow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasCommandHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCommandHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatchToQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pipeThrough",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "map",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Bus",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher",
            "Illuminate\\Bus\\Dispatcher"
        ],
        "lcom": 7,
        "length": 23,
        "vocabulary": 5,
        "volume": 53.4,
        "difficulty": 2,
        "effort": 106.81,
        "level": 0.5,
        "bugs": 0.02,
        "time": 6,
        "intelligentContent": 26.7,
        "number_operators": 7,
        "number_operands": 16,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 51,
        "loc": 83,
        "lloc": 32,
        "mi": 101.79,
        "mIwoC": 54.94,
        "commentWeight": 46.86,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.07,
        "relativeSystemComplexity": 5.07,
        "totalStructuralComplexity": 7,
        "totalDataComplexity": 28.5,
        "totalSystemComplexity": 35.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 8,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Cache",
        "interface": false,
        "methods": [
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "repository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEventDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "many",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "put",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "putMany",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forever",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remember",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rememberForever",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultCacheTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultCacheTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetUnset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macroCall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilesystem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 36,
        "nbMethods": 36,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 36,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Cache",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\CacheManager",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\Repository",
            "Illuminate\\Cache\\FileStore",
            "Illuminate\\Cache\\FileStore",
            "Illuminate\\Cache\\FileStore",
            "Illuminate\\Cache\\FileStore"
        ],
        "lcom": 36,
        "length": 122,
        "vocabulary": 17,
        "volume": 498.67,
        "difficulty": 3,
        "effort": 1496.01,
        "level": 0.33,
        "bugs": 0.17,
        "time": 83,
        "intelligentContent": 166.22,
        "number_operators": 26,
        "number_operands": 96,
        "number_operators_unique": 1,
        "number_operands_unique": 16,
        "cloc": 267,
        "loc": 415,
        "lloc": 148,
        "mi": 80.96,
        "mIwoC": 33.63,
        "commentWeight": 47.33,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 6.83,
        "relativeSystemComplexity": 15.83,
        "totalStructuralComplexity": 324,
        "totalDataComplexity": 245.75,
        "totalSystemComplexity": 569.75,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 37,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Config",
        "interface": false,
        "methods": [
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "push",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetUnset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Config",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository",
            "Illuminate\\Config\\Repository"
        ],
        "lcom": 10,
        "length": 33,
        "vocabulary": 4,
        "volume": 66,
        "difficulty": 4.67,
        "effort": 308,
        "level": 0.21,
        "bugs": 0.02,
        "time": 17,
        "intelligentContent": 14.14,
        "number_operators": 5,
        "number_operands": 28,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 74,
        "loc": 118,
        "lloc": 44,
        "mi": 98.35,
        "mIwoC": 51.27,
        "commentWeight": 47.07,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.2,
        "relativeSystemComplexity": 4.2,
        "totalStructuralComplexity": 10,
        "totalDataComplexity": 32,
        "totalSystemComplexity": 42,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 11,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Cookie",
        "interface": false,
        "methods": [
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forever",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasQueued",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queued",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unqueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultPathAndDomain",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueuedCookies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Cookie",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar",
            "Illuminate\\Cookie\\CookieJar"
        ],
        "lcom": 9,
        "length": 54,
        "vocabulary": 11,
        "volume": 186.81,
        "difficulty": 2.35,
        "effort": 439,
        "level": 0.43,
        "bugs": 0.06,
        "time": 24,
        "intelligentContent": 79.49,
        "number_operators": 7,
        "number_operands": 47,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 77,
        "loc": 117,
        "lloc": 40,
        "mi": 96.57,
        "mIwoC": 49.01,
        "commentWeight": 47.55,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.78,
        "relativeSystemComplexity": 5.78,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 43,
        "totalSystemComplexity": 52,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "DB",
        "interface": false,
        "methods": [
            {
                "name": "connection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "purge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "supportedDrivers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "availableDrivers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConnections",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSchemaBuilder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDefaultQueryGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDefaultSchemaGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDefaultPostProcessor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectOne",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectFromWriteConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cursor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "statement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affectingStatement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unprepared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "beginTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollBack",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transactionLevel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pretend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listen",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDoctrineAvailable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDoctrineColumn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDoctrineSchemaManager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDoctrineConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPdo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReadPdo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPdo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setReadPdo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setReconnector",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDriverName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQueryGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSchemaGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSchemaGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPostProcessor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPostProcessor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEventDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEventDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pretending",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFetchMode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFetchArgument",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFetchConstructorArgument",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFetchMode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flushQueryLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enableQueryLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disableQueryLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logging",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDatabaseName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDatabaseName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTablePrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTablePrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withTablePrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 72,
        "nbMethods": 72,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 72,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\DatabaseManager",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection",
            "Illuminate\\Database\\MySqlConnection"
        ],
        "lcom": 72,
        "length": 164,
        "vocabulary": 25,
        "volume": 761.59,
        "difficulty": 2.35,
        "effort": 1792.92,
        "level": 0.42,
        "bugs": 0.25,
        "time": 100,
        "intelligentContent": 323.51,
        "number_operators": 51,
        "number_operands": 113,
        "number_operators_unique": 1,
        "number_operands_unique": 24,
        "cloc": 546,
        "loc": 838,
        "lloc": 292,
        "mi": 73.36,
        "mIwoC": 25.91,
        "commentWeight": 47.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 17.26,
        "relativeSystemComplexity": 21.26,
        "totalStructuralComplexity": 288,
        "totalDataComplexity": 1242.67,
        "totalSystemComplexity": 1530.67,
        "pageRank": 0.07,
        "afferentCoupling": 8,
        "efferentCoupling": 73,
        "instability": 0.9,
        "violations": {}
    },
    {
        "name": "Eloquent",
        "interface": false,
        "methods": [
            {
                "name": "withGlobalScope",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withoutGlobalScope",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withoutGlobalScopes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removedScopes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "find",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findMany",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findOrFail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findOrNew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOrNew",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOrCreate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateOrCreate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "first",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOrFail",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "value",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cursor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chunk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "chunkById",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "each",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pluck",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "paginate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "simplePaginate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "onDelete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModels",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "eagerLoadRelations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "when",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "where",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doesntHave",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereHas",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereDoesntHave",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orHas",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereHas",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeModelDefinedRelationConstraints",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "without",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withCount",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "scopes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "applyScopes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toBase",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEagerLoads",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEagerLoads",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setModel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectSub",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addSelect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "distinct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "from",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "join",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "joinWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "leftJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "leftJoinWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rightJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rightJoinWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "crossJoin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereColumn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereColumn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNotBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereNotBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNested",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forNestedWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNestedWhereQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNotExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereNotExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addWhereExistsQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereIn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereIn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNotIn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereNotIn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereNotNull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orWhereTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "whereYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dynamicWhere",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "groupBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "having",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orHaving",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "havingRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orHavingRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "latest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "oldest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inRandomOrder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderByRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "limit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "take",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forPage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forPageAfterId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "union",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unionAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lockForUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sharedLock",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toSql",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCountForPagination",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "implode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "min",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "max",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sum",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "avg",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "average",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "aggregate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "numericAggregate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insertGetId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateOrInsert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "truncate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeWheres",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRawBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addBinding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProcessor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGrammar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useWritePdo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macroCall",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 142,
        "nbMethods": 142,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 142,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Eloquent\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder",
            "Illuminate\\Database\\Query\\Builder"
        ],
        "lcom": 142,
        "length": 719,
        "vocabulary": 61,
        "volume": 4264.2,
        "difficulty": 4.84,
        "effort": 20645.84,
        "level": 0.21,
        "bugs": 1.42,
        "time": 1147,
        "intelligentContent": 880.73,
        "number_operators": 138,
        "number_operands": 581,
        "number_operators_unique": 1,
        "number_operands_unique": 60,
        "cloc": 1125,
        "loc": 1697,
        "lloc": 572,
        "mi": 61.92,
        "mIwoC": 14.3,
        "commentWeight": 47.63,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 46.62,
        "relativeSystemComplexity": 50.62,
        "totalStructuralComplexity": 568,
        "totalDataComplexity": 6620.67,
        "totalSystemComplexity": 7188.67,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 143,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Event",
        "interface": false,
        "methods": [
            {
                "name": "listen",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasListeners",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "push",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subscribe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "until",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fire",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getListeners",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeListener",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createClassListener",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forgetPushed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQueueResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Event",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher",
            "Illuminate\\Events\\Dispatcher"
        ],
        "lcom": 14,
        "length": 45,
        "vocabulary": 11,
        "volume": 155.67,
        "difficulty": 1.85,
        "effort": 288,
        "level": 0.54,
        "bugs": 0.05,
        "time": 16,
        "intelligentContent": 84.15,
        "number_operators": 8,
        "number_operands": 37,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 102,
        "loc": 162,
        "lloc": 60,
        "mi": 92.84,
        "mIwoC": 45.73,
        "commentWeight": 47.11,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.64,
        "relativeSystemComplexity": 5.64,
        "totalStructuralComplexity": 14,
        "totalDataComplexity": 65,
        "totalSystemComplexity": 79,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 15,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "File",
        "interface": false,
        "methods": [
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sharedGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequire",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "requireOnce",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "put",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "append",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "move",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "link",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "basename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dirname",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "type",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mimeType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isReadable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isWritable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "glob",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "files",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "allFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "directories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "moveDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cleanDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 35,
        "nbMethods": 35,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 35,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\File",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem",
            "Illuminate\\Filesystem\\Filesystem"
        ],
        "lcom": 35,
        "length": 143,
        "vocabulary": 26,
        "volume": 672.16,
        "difficulty": 2.2,
        "effort": 1478.76,
        "level": 0.45,
        "bugs": 0.22,
        "time": 82,
        "intelligentContent": 305.53,
        "number_operators": 33,
        "number_operands": 110,
        "number_operators_unique": 1,
        "number_operands_unique": 25,
        "cloc": 268,
        "loc": 412,
        "lloc": 144,
        "mi": 80.43,
        "mIwoC": 32.99,
        "commentWeight": 47.44,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 17.27,
        "relativeSystemComplexity": 18.27,
        "totalStructuralComplexity": 35,
        "totalDataComplexity": 604.5,
        "totalSystemComplexity": 639.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 36,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Gate",
        "interface": false,
        "methods": [
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "define",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "policy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "before",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "allows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "denies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "authorize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPolicyFor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolvePolicy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate",
            "Illuminate\\Auth\\Access\\Gate"
        ],
        "lcom": 12,
        "length": 48,
        "vocabulary": 7,
        "volume": 134.75,
        "difficulty": 3,
        "effort": 404.26,
        "level": 0.33,
        "bugs": 0.04,
        "time": 22,
        "intelligentContent": 44.92,
        "number_operators": 12,
        "number_operands": 36,
        "number_operators_unique": 1,
        "number_operands_unique": 6,
        "cloc": 93,
        "loc": 145,
        "lloc": 52,
        "mi": 94.82,
        "mIwoC": 47.52,
        "commentWeight": 47.3,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.75,
        "relativeSystemComplexity": 7.75,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 81,
        "totalSystemComplexity": 93,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 13,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Hash",
        "interface": false,
        "methods": [
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "needsRehash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRounds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Hash",
            "Illuminate\\Hashing\\BcryptHasher",
            "Illuminate\\Hashing\\BcryptHasher",
            "Illuminate\\Hashing\\BcryptHasher",
            "Illuminate\\Hashing\\BcryptHasher"
        ],
        "lcom": 4,
        "length": 20,
        "vocabulary": 5,
        "volume": 46.44,
        "difficulty": 2,
        "effort": 92.88,
        "level": 0.5,
        "bugs": 0.02,
        "time": 5,
        "intelligentContent": 23.22,
        "number_operators": 4,
        "number_operands": 16,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 33,
        "loc": 53,
        "lloc": 20,
        "mi": 106.81,
        "mIwoC": 59.81,
        "commentWeight": 47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 16,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Lang",
        "interface": false,
        "methods": [
            {
                "name": "hasForLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "choice",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trans",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transChoice",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSelector",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSelector",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLoader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "locale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setParsedKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 21,
        "nbMethods": 21,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 21,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Lang",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator",
            "Illuminate\\Translation\\Translator"
        ],
        "lcom": 21,
        "length": 94,
        "vocabulary": 19,
        "volume": 399.31,
        "difficulty": 2.25,
        "effort": 898.44,
        "level": 0.44,
        "bugs": 0.13,
        "time": 50,
        "intelligentContent": 177.47,
        "number_operators": 13,
        "number_operands": 81,
        "number_operators_unique": 1,
        "number_operands_unique": 18,
        "cloc": 166,
        "loc": 254,
        "lloc": 88,
        "mi": 86.72,
        "mIwoC": 39.23,
        "commentWeight": 47.49,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 7.43,
        "relativeSystemComplexity": 8.43,
        "totalStructuralComplexity": 21,
        "totalDataComplexity": 156,
        "totalSystemComplexity": 177,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 22,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Log",
        "interface": false,
        "methods": [
            {
                "name": "debug",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "info",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notice",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "warning",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "error",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "critical",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "emergency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "write",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useDailyFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useSyslog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useErrorLog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listen",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMonolog",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEventDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEventDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Log",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Monolog\\Logger",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer",
            "Illuminate\\Log\\Writer"
        ],
        "lcom": 18,
        "length": 84,
        "vocabulary": 13,
        "volume": 310.84,
        "difficulty": 3.04,
        "effort": 945.46,
        "level": 0.33,
        "bugs": 0.1,
        "time": 53,
        "intelligentContent": 102.19,
        "number_operators": 11,
        "number_operands": 73,
        "number_operators_unique": 1,
        "number_operands_unique": 12,
        "cloc": 142,
        "loc": 218,
        "lloc": 76,
        "mi": 88.84,
        "mIwoC": 41.38,
        "commentWeight": 47.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 4.28,
        "relativeSystemComplexity": 8.28,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 77,
        "totalSystemComplexity": 149,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 19,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Mail",
        "interface": false,
        "methods": [
            {
                "name": "alwaysFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alwaysTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bcc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "plain",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "onQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queueOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "later",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "laterOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getViewFactory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSwiftMailer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "failures",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSwiftMailer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQueue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 18,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Mail",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer",
            "Illuminate\\Mail\\Mailer"
        ],
        "lcom": 18,
        "length": 89,
        "vocabulary": 12,
        "volume": 319.06,
        "difficulty": 3.55,
        "effort": 1131.22,
        "level": 0.28,
        "bugs": 0.11,
        "time": 63,
        "intelligentContent": 89.99,
        "number_operators": 11,
        "number_operands": 78,
        "number_operators_unique": 1,
        "number_operands_unique": 11,
        "cloc": 149,
        "loc": 225,
        "lloc": 76,
        "mi": 88.92,
        "mIwoC": 41.31,
        "commentWeight": 47.62,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.58,
        "relativeSystemComplexity": 7.58,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 118.5,
        "totalSystemComplexity": 136.5,
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 19,
        "instability": 0.95,
        "violations": {}
    },
    {
        "name": "Notification",
        "interface": false,
        "methods": [
            {
                "name": "send",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sendNow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "channel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deliversVia",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deliverVia",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDrivers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Notification",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager",
            "Illuminate\\Notifications\\ChannelManager"
        ],
        "lcom": 9,
        "length": 26,
        "vocabulary": 8,
        "volume": 78,
        "difficulty": 1.43,
        "effort": 111.43,
        "level": 0.7,
        "bugs": 0.03,
        "time": 6,
        "intelligentContent": 54.6,
        "number_operators": 6,
        "number_operands": 20,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 66,
        "loc": 106,
        "lloc": 40,
        "mi": 98.67,
        "mIwoC": 51.67,
        "commentWeight": 47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 3.56,
        "relativeSystemComplexity": 4.56,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 32,
        "totalSystemComplexity": 41,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Password",
        "interface": false,
        "methods": [
            {
                "name": "broker",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Password",
            "Illuminate\\Auth\\Passwords\\PasswordBrokerManager",
            "Illuminate\\Auth\\Passwords\\PasswordBrokerManager",
            "Illuminate\\Auth\\Passwords\\PasswordBrokerManager"
        ],
        "lcom": 3,
        "length": 6,
        "vocabulary": 2,
        "volume": 6,
        "difficulty": 2,
        "effort": 12,
        "level": 0.5,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 3,
        "number_operators": 2,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 20,
        "loc": 36,
        "lloc": 16,
        "mi": 113.88,
        "mIwoC": 68.15,
        "commentWeight": 45.73,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 2.33,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 7,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Queue",
        "interface": false,
        "methods": [
            {
                "name": "before",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "after",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exceptionOccurred",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "looping",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "failing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stopping",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connected",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConnector",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDownForMaintenance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "push",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushRaw",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "later",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "laterOn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bulk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 23,
        "nbMethods": 23,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 23,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Queue",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\QueueManager",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue",
            "Illuminate\\Queue\\SyncQueue"
        ],
        "lcom": 23,
        "length": 92,
        "vocabulary": 15,
        "volume": 359.43,
        "difficulty": 2.82,
        "effort": 1014.12,
        "level": 0.35,
        "bugs": 0.12,
        "time": 56,
        "intelligentContent": 127.39,
        "number_operators": 13,
        "number_operands": 79,
        "number_operators_unique": 1,
        "number_operands_unique": 14,
        "cloc": 180,
        "loc": 276,
        "lloc": 96,
        "mi": 86.2,
        "mIwoC": 38.73,
        "commentWeight": 47.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 4.87,
        "relativeSystemComplexity": 8.87,
        "totalStructuralComplexity": 92,
        "totalDataComplexity": 112,
        "totalSystemComplexity": 204,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 24,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Redirect",
        "interface": false,
        "methods": [
            {
                "name": "home",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "back",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "refresh",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "guest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "intended",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "away",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "route",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "action",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUrlGenerator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Redirect",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector",
            "Illuminate\\Routing\\Redirector"
        ],
        "lcom": 12,
        "length": 86,
        "vocabulary": 12,
        "volume": 308.31,
        "difficulty": 3.41,
        "effort": 1051.05,
        "level": 0.29,
        "bugs": 0.1,
        "time": 58,
        "intelligentContent": 90.44,
        "number_operators": 11,
        "number_operands": 75,
        "number_operators_unique": 1,
        "number_operands_unique": 11,
        "cloc": 104,
        "loc": 156,
        "lloc": 52,
        "mi": 92.68,
        "mIwoC": 45,
        "commentWeight": 47.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.83,
        "relativeSystemComplexity": 7.83,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 82,
        "totalSystemComplexity": 94,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 13,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Request",
        "interface": false,
        "methods": [
            {
                "name": "capture",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "method",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "root",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fullUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fullUrlWithQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "path",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decodedPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "segment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "segments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fullUrlIs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ajax",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pjax",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ips",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "input",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "only",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "except",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "intersect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "query",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasCookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "allFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "header",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "server",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "old",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flashOnly",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flashExcept",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "merge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "json",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matchesType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isJson",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expectsJson",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "wantsJson",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "accepts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prefers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "acceptsJson",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "acceptsHtml",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "format",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bearerToken",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromBase",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "duplicate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "session",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "user",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "route",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fingerprint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUserResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRouteResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRouteResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetSet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "offsetUnset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromGlobals",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFactory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "overrideGlobals",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTrustedProxies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTrustedProxies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTrustedHosts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTrustedHosts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTrustedHeaderName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTrustedHeaderName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalizeQueryString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enableHttpMethodParameterOverride",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHttpMethodParameterOverride",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasPreviousSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSession",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClientIps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClientIp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getScriptName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPathInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBasePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getScheme",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPort",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUserInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHttpHost",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequestUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSchemeAndHttpHost",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUri",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUriForPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRelativeUriForPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSecure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHost",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRealMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMimeType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMimeTypes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequestFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequestFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContentType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isMethodSafe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isMethodCacheable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getETags",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isNoCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPreferredLanguage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLanguages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCharsets",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEncodings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAcceptableContentTypes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isXmlHttpRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFromTrustedProxy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 135,
        "nbMethods": 135,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 135,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request"
        ],
        "lcom": 135,
        "length": 321,
        "vocabulary": 41,
        "volume": 1719.77,
        "difficulty": 2.44,
        "effort": 4191.95,
        "level": 0.41,
        "bugs": 0.57,
        "time": 233,
        "intelligentContent": 705.55,
        "number_operators": 126,
        "number_operands": 195,
        "number_operators_unique": 1,
        "number_operands_unique": 40,
        "cloc": 1121,
        "loc": 1665,
        "lloc": 544,
        "mi": 65.31,
        "mIwoC": 17.54,
        "commentWeight": 47.77,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 63.36,
        "relativeSystemComplexity": 64.36,
        "totalStructuralComplexity": 135,
        "totalDataComplexity": 8553,
        "totalSystemComplexity": 8688,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 136,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Response",
        "interface": false,
        "methods": [
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "view",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "json",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stream",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "redirectTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "redirectToRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "redirectToAction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "redirectGuest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "redirectToIntended",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Response",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory",
            "Illuminate\\Routing\\ResponseFactory"
        ],
        "lcom": 14,
        "length": 124,
        "vocabulary": 24,
        "volume": 568.54,
        "difficulty": 2.41,
        "effort": 1371.9,
        "level": 0.41,
        "bugs": 0.19,
        "time": 76,
        "intelligentContent": 235.61,
        "number_operators": 13,
        "number_operands": 111,
        "number_operators_unique": 1,
        "number_operands_unique": 23,
        "cloc": 132,
        "loc": 192,
        "lloc": 60,
        "mi": 89.75,
        "mIwoC": 41.79,
        "commentWeight": 47.97,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 8.21,
        "relativeSystemComplexity": 9.21,
        "totalStructuralComplexity": 14,
        "totalDataComplexity": 115,
        "totalSystemComplexity": 129,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 15,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Route",
        "interface": false,
        "methods": [
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "post",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "put",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "patch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "options",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "any",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "match",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "singularResourceParameters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resourceParameters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resources",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "auth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "group",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeWithLastGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastGroupPrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatchToRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gatherRouteMiddleware",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveMiddlewareClassName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substituteBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "substituteImplicitBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matched",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMiddleware",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "middleware",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "middlewareGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prependMiddlewareToGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pushMiddlewareToGroup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "model",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createClassBinding",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pattern",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "patterns",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareResponse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasGroupStack",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGroupStack",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "input",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCurrentRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentRouteName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentRouteNamed",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentRouteAction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "uses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "currentRouteUses",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCurrentRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPatterns",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 53,
        "nbMethods": 53,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 53,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Route",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router",
            "Illuminate\\Routing\\Router"
        ],
        "lcom": 53,
        "length": 165,
        "vocabulary": 28,
        "volume": 793.21,
        "difficulty": 2.33,
        "effort": 1850.83,
        "level": 0.43,
        "bugs": 0.26,
        "time": 103,
        "intelligentContent": 339.95,
        "number_operators": 39,
        "number_operands": 126,
        "number_operators_unique": 1,
        "number_operands_unique": 27,
        "cloc": 386,
        "loc": 602,
        "lloc": 216,
        "mi": 75.94,
        "mIwoC": 28.64,
        "commentWeight": 47.3,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 20.09,
        "relativeSystemComplexity": 21.09,
        "totalStructuralComplexity": 53,
        "totalDataComplexity": 1065,
        "totalSystemComplexity": 1118,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 54,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Schema",
        "interface": false,
        "methods": [
            {
                "name": "hasTable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getColumnListing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasColumn",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasColumns",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getColumnType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "table",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "drop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dropIfExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enableForeignKeyConstraints",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disableForeignKeyConstraints",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "blueprintResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 15,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder",
            "Illuminate\\Database\\Schema\\MySqlBuilder"
        ],
        "lcom": 15,
        "length": 46,
        "vocabulary": 9,
        "volume": 145.82,
        "difficulty": 2.25,
        "effort": 328.09,
        "level": 0.44,
        "bugs": 0.05,
        "time": 18,
        "intelligentContent": 64.81,
        "number_operators": 10,
        "number_operands": 36,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 121,
        "loc": 185,
        "lloc": 64,
        "mi": 92.81,
        "mIwoC": 45.31,
        "commentWeight": 47.49,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 5.6,
        "relativeSystemComplexity": 6.6,
        "totalStructuralComplexity": 15,
        "totalDataComplexity": 84,
        "totalSystemComplexity": 99,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 16,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Session",
        "interface": false,
        "methods": [
            {
                "name": "getSessionConfig",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDrivers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "start",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isValidId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "invalidate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "migrate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "regenerate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ageFlashData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "has",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pull",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasOldInput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOldInput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "put",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remember",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "push",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "increment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "now",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flashInput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reflash",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "keep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStarted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerBag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMetadataBag",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBagData",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "token",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getToken",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "regenerateToken",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previousUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPreviousUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handlerNeedsRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequestOnHandler",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 54,
        "nbMethods": 54,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 54,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Session",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\SessionManager",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store",
            "Illuminate\\Session\\Store"
        ],
        "lcom": 54,
        "length": 135,
        "vocabulary": 17,
        "volume": 551.81,
        "difficulty": 3,
        "effort": 1655.42,
        "level": 0.33,
        "bugs": 0.18,
        "time": 92,
        "intelligentContent": 183.94,
        "number_operators": 39,
        "number_operands": 96,
        "number_operators_unique": 1,
        "number_operands_unique": 16,
        "cloc": 382,
        "loc": 602,
        "lloc": 220,
        "mi": 76.76,
        "mIwoC": 29.57,
        "commentWeight": 47.19,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 13.29,
        "relativeSystemComplexity": 17.29,
        "totalStructuralComplexity": 216,
        "totalDataComplexity": 717.67,
        "totalSystemComplexity": 933.67,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 55,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Storage",
        "interface": false,
        "methods": [
            {
                "name": "drive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disk",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cloud",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createLocalDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFtpDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createS3Driver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createRackspaceDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultCloudDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "put",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "putFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "putFileAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVisibility",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVisibility",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "append",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "move",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "size",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mimeType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "url",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "files",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "allFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "directories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "allDirectories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDriver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 33,
        "nbMethods": 33,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 33,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Storage",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemManager",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter",
            "Illuminate\\Filesystem\\FilesystemAdapter"
        ],
        "lcom": 33,
        "length": 126,
        "vocabulary": 17,
        "volume": 515.02,
        "difficulty": 2.94,
        "effort": 1512.87,
        "level": 0.34,
        "bugs": 0.17,
        "time": 84,
        "intelligentContent": 175.33,
        "number_operators": 32,
        "number_operands": 94,
        "number_operators_unique": 1,
        "number_operands_unique": 16,
        "cloc": 245,
        "loc": 381,
        "lloc": 136,
        "mi": 81.66,
        "mIwoC": 34.34,
        "commentWeight": 47.33,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 11.13,
        "relativeSystemComplexity": 15.13,
        "totalStructuralComplexity": 132,
        "totalDataComplexity": 367.33,
        "totalSystemComplexity": 499.33,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 34,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "URL",
        "interface": false,
        "methods": [
            {
                "name": "full",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previous",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "asset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assetFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secureAsset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forceSchema",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "route",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "action",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forceRootUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isValidUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSessionResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRootControllerNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 20,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\URL",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator",
            "Illuminate\\Routing\\UrlGenerator"
        ],
        "lcom": 20,
        "length": 72,
        "vocabulary": 16,
        "volume": 288,
        "difficulty": 1.87,
        "effort": 537.6,
        "level": 0.54,
        "bugs": 0.1,
        "time": 30,
        "intelligentContent": 154.29,
        "number_operators": 16,
        "number_operands": 56,
        "number_operators_unique": 1,
        "number_operands_unique": 15,
        "cloc": 150,
        "loc": 234,
        "lloc": 84,
        "mi": 87.96,
        "mIwoC": 40.67,
        "commentWeight": 47.29,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 8.7,
        "relativeSystemComplexity": 9.7,
        "totalStructuralComplexity": 20,
        "totalDataComplexity": 174,
        "totalSystemComplexity": 194,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 21,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Validator",
        "interface": false,
        "methods": [
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extendImplicit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replacer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPresenceVerifier",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPresenceVerifier",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\Validator",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory",
            "Illuminate\\Validation\\Factory"
        ],
        "lcom": 9,
        "length": 39,
        "vocabulary": 11,
        "volume": 134.92,
        "difficulty": 1.8,
        "effort": 242.85,
        "level": 0.56,
        "bugs": 0.04,
        "time": 13,
        "intelligentContent": 74.95,
        "number_operators": 3,
        "number_operands": 36,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 73,
        "loc": 113,
        "lloc": 40,
        "mi": 97.38,
        "mIwoC": 50,
        "commentWeight": 47.37,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 22.5,
        "totalSystemComplexity": 31.5,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "View",
        "interface": false,
        "methods": [
            {
                "name": "file",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "of",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "renderEach",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEngineFromPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "share",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "creator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "composers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "composer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "callComposer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "callCreator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "inject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "yieldSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stopSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "appendSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "yieldContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startPush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "stopPush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "yieldPushContent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flushSections",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flushSectionsIfDoneRendering",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementRender",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrementRender",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doneRendering",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLoop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementLoopIndices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "popLoop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFirstLoop",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLoopStack",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addLocation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prependNamespace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEngineResolver",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFinder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFinder",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDispatcher",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setContainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getShared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasSection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSections",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNames",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 50,
        "nbMethods": 50,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 50,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\Facades\\View",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory",
            "Illuminate\\View\\Factory"
        ],
        "lcom": 50,
        "length": 142,
        "vocabulary": 30,
        "volume": 696.78,
        "difficulty": 1.95,
        "effort": 1357.52,
        "level": 0.51,
        "bugs": 0.23,
        "time": 75,
        "intelligentContent": 357.64,
        "number_operators": 29,
        "number_operands": 113,
        "number_operators_unique": 1,
        "number_operands_unique": 29,
        "cloc": 358,
        "loc": 562,
        "lloc": 204,
        "mi": 76.81,
        "mIwoC": 29.58,
        "commentWeight": 47.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 15.04,
        "relativeSystemComplexity": 16.04,
        "totalStructuralComplexity": 50,
        "totalDataComplexity": 752,
        "totalSystemComplexity": 802,
        "pageRank": 0.01,
        "afferentCoupling": 0,
        "efferentCoupling": 51,
        "instability": 1,
        "violations": {}
    }
]