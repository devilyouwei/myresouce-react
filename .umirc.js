// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
        {
            path: '/404',
            component: './404'
        },
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                {
                    path: '/register',
                    component: './register/register',
                },
                {
                    path: '/login',
                    component: './login/login',
                },
                {
                    path: '/',
                    component: '../pages/index/index',
                },
            ],
        }
    ],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer:true
                },
                dynamicImport: false,
                title: 'myresource',
                dll: false,
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            },
        ],
    ],
};
