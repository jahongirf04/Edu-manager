export default {
  path: '/director',
  name: 'director',
  component: () => import('../pages/director/Director.vue'),
  children: [
    {
      path: '/staffs',
      name: 'staffs',
      component: () => import('../pages/director/staffs/Staffs.vue')
    },
    {
      path: '/director-profile',
      name: 'director-profile',
      component: () => import('../pages/director/profile/Profile.vue')
    }
  ]
}
