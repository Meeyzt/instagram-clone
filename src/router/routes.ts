import { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */'../views/User/Index.vue'),
    children: [
      {
        path: 'followers',
        name: 'Followers',
        component: () => import(/* webpackChunkName: "Followers" */'../views/User/Followers.vue'),
        children: [
          {
            path: 'mutualOnly',
            name: 'MutualOnly',
            component: () => import(/* webpackChunkName: "MutualOnly" */'../views/User/MutualOnly.vue'),
          },
        ],
      },
      {
        path: 'following',
        name: 'Following',
        component: () => import(/* webpackChunkName: "Following" */'../views/User/Following.vue'),
      },
      {
        path: 'reels',
        name: 'Reels',
        component: () => import(/* webpackChunkName: "Reels" */'../views/User/Reels.vue'),
      },
      {
        path: 'channel',
        name: 'Channel',
        component: () => import(/* webpackChunkName: "Channel" */'../views/User/Channel.vue'),
      },
      {
        path: 'tagged',
        name: 'Tagged',
        component: () => import(/* webpackChunkName: "tagged" */'../views/User/Tagged.vue'),
      },
      {
        path: 'saved',
        name: 'Saved',
        component: () => import(/* webpackChunkName: "Saved" */'../views/User/Saved.vue'),
      },
    ],
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () => import(/* webpackChunkName: "Direct" */'../views/Direct/Index.vue'),
    children: [
      {
        path: 'inbox',
        name: 'Inbox',
        component: () => import(/* webpackChunkName: "Inbox" */'../views/Direct/Inbox.vue'),
      },
      {
        path: 't/:id',
        name: 'Message',
        component: () => import(/* webpackChunkName: "Message" */'../views/Direct/Message.vue'),
      },
    ],
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "Explore" */'../views/Explore.vue'),
  },
  {
    path: '/p/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "Post" */'../views/Post.vue'),
  },
  {
    path: '/emails',
    name: 'Emails',
    children: [
      {
        path: 'settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "Settings" */'../views/Emails/Settings.vue'),
      },
      {
        path: 'emails-sent',
        name: 'SentedEmail',
        component: () => import(/* webpackChunkName: "SentedEmails" */'../views/Emails/SentedEmails.vue'),
      },
    ],
  },
  {
    path: '/push/web/settings',
    name: 'WebSettings',
    component: () => import(/* webpackChunkName: "WebSettings" */'../views/PushWebSettings.vue'),
  },
  {
    path: '/session/login-activity',
    name: 'LoginActivity',
    component: () => import(/* webpackChunkName: "Login Activity" */'../views/SessionLoginActivity.vue'),
  },
  {
    path: '/accounts',
    name: 'Accounts',
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: () => import(/* webpackChunkName: "Edit" */'../views/Accounts/Edit.vue'),
      },
      {
        path: 'password',
        name: 'Password',
        children: [
          {
            path: 'change',
            name: 'PasswordChange',
            component: () => import(/* webpackChunkName: "PasswordChange" */'../views/Accounts/PasswordChange.vue'),
          },
          {
            path: 'reset',
            name: 'PasswordReset',
            component: () => import(/* webpackChunkName: "PasswordReset" */'../views/Accounts/PasswordReset.vue'),
          },
        ],
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */'../views/Accounts/Login.vue'),
      },
      {
        path: 'manage-access',
        name: 'ManageAccess',
        component: () => import(/* webpackChunkName: "ManageAccess" */'../views/Accounts/ManageAccess.vue'),
      },
      {
        path: 'contact-history',
        name: 'ContactHistory',
        component: () => import(/* webpackChunkName: "ContactHistory" */'../views/Accounts/ContactHistory.vue'),
      },
      {
        path: 'privacy-and-security',
        name: 'PrivacyAndSecurity',
        component: () => import(/* webpackChunkName: "PrivacyAndSecurity" */'../views/Accounts/PrivacyAndSecurity.vue'),
      },
      {
        path: 'convert-to-proffessional-account',
        name: 'ConvertToProffessionalAccount',
        component: () => import(/* webpackChunkName: "ConvertToProffessionalAccount" */'../views/Accounts/ConvertToProffessionalAccount.vue'),
      },
      {
        path: 'emailsignup',
        name: 'EmailsSignup',
        component: () => import(/* webpackChunkName: "EmailsSingup" */'../views/Accounts/EmailsSingup.vue'),
      },
    ],
  },
  {
    path: '/push/web/settings',
    name: 'PushWebSettings',
    component: () => import(/* webpackChunkName: "PushWebSettings" */'../views/PushWebSettings.vue'),
  },
  {
    path: '/session/login-activity',
    name: 'SessionActivity',
    component: () => import(/* webpackChunkName: "SessionLoginActivity" */'../views/SessionLoginActivity.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "Search" */'../views/Components.vue'),
  },
];

export default routes;
