// importing all routed components here
import HomeLayout from '@/components/Dashboard/Layout/HomeLayout'
import DetailsLayout from '@/components/Dashboard/Layout/DetailsLayout'
import SeasonLayout from '@/components/Dashboard/Layout/SeasonLayout'

import TeamsView from '@/components/Dashboard/Views/TeamsView';
import BatsmenView from '@/components/Dashboard/Views/BatsmenView';
import BowlersView from '@/components/Dashboard/Views/BowlersView';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeLayout,

        children: [
            {
                name: 'Details',
                path: '',
                component: DetailsLayout,

                children: [
                    { name: 'Teams', path: '/', component: TeamsView },
                    { name: 'Batsmen', path: '/batsmen', component: BatsmenView },
                    { name: 'Bowlers', path: '/bowlers', component: BowlersView },
                ]

            },

            {
                path: '/year/:year',
                name: 'SeasonLayout',
                component: SeasonLayout,
                beforeEnter: (to, from, next) => {
                    if (['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'].indexOf(to.params.year) >= 0) {
                        next();
                    } else {
                        next('/');
                    }
                }
            },
        ]
    },

    {
        path: '*',
        redirect: '/'
    }
]

export default routes;