export default {
  path: '/admin',
  name: 'admin',
  component: () => import('../pages/admin/Admin.vue'),
  children: [
    {
      path: '/students',
      name: 'students',
      component: () => import('../pages/admin/students/Students.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../pages/admin/courses/Courses.vue')
    },
    {
      path: '/groups',
      name: 'groups',
      component: () => import('../pages/admin/groups/Groups.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('../pages/admin/rooms/Rooms.vue')
    },
    {
      path: '/admin-profile',
      name: 'admin-profile',
      component: () => import('../pages/admin/profile/Profile.vue')
    }
  ]
}
