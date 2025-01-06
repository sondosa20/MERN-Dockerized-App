import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
    client: '@hey-api/client-axios',
    input: 'http://localhost:5000/swagger-json',
    output: {
        format: 'prettier',
        lint: 'eslint',
        path: './src/client',
    },
    experimentalParser: true,
    plugins: [
        ...defaultPlugins,
        '@tanstack/react-query',
        'zod',
        {
            dates: true,
            name: '@hey-api/transformers',
        },
        {
            enums: 'javascript',
            name: '@hey-api/typescript',
        },
        {
            name: '@hey-api/sdk',
            validator: true,
            transformer: true,
        },
    ],
})