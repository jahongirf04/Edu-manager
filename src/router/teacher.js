export default {
  path: '/teacher',
  name: 'teacher',
  component: () => import('../pages/teacher/Teacher.vue'),
  children: [
    {
      path: '/teacher-groups',
      name: 'teacher-groups',
      component: () => import('../pages/teacher/groups/Groups.vue')
    },
    {
      path: '/teacher-groups/:id',
      name: 'teacher-one-group',
      component: () => import('../pages/teacher/one-group/OneGroup.vue')
    },
    {
      path: '/teacher-profile',
      name: 'teacher-profile',
      component: () => import('../pages/teacher/profile/Profile.vue')
    }
  ]
}
