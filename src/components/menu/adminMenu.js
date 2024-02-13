import { mdiAccount } from '@mdi/js'
import { mdiBookOutline } from '@mdi/js'
import { mdiAccountGroup } from '@mdi/js'
import { mdiDoor } from '@mdi/js'
import { mdiAccountCogOutline } from '@mdi/js'

export const adminMenu = [
  {
    path: '/students',
    label: 'Students',
    name: 'students',
    icon: mdiAccount
  },
  {
    path: '/courses',
    label: 'Courses',
    name: 'Courses',
    icon: mdiBookOutline
  },
  {
    path: '/groups',
    label: 'Groups',
    name: 'groups',
    icon: mdiAccountGroup
  },
  {
    path: '/rooms',
    label: 'Rooms',
    name: 'Rooms',
    icon: mdiDoor
  },
  {
    path: '/admin-profile',
    label: 'Profile',
    name: 'Profile',
    icon: mdiAccountCogOutline
  }
]
