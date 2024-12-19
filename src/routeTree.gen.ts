/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as MockOrderEntryImport } from './routes/mock/order-entry'
import { Route as MockDailyOrdersDetailImport } from './routes/mock/daily-orders-detail'
import { Route as MockDailyOrdersImport } from './routes/mock/daily-orders'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MockOrderEntryRoute = MockOrderEntryImport.update({
  id: '/mock/order-entry',
  path: '/mock/order-entry',
  getParentRoute: () => rootRoute,
} as any)

const MockDailyOrdersDetailRoute = MockDailyOrdersDetailImport.update({
  id: '/mock/daily-orders-detail',
  path: '/mock/daily-orders-detail',
  getParentRoute: () => rootRoute,
} as any)

const MockDailyOrdersRoute = MockDailyOrdersImport.update({
  id: '/mock/daily-orders',
  path: '/mock/daily-orders',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/mock/daily-orders': {
      id: '/mock/daily-orders'
      path: '/mock/daily-orders'
      fullPath: '/mock/daily-orders'
      preLoaderRoute: typeof MockDailyOrdersImport
      parentRoute: typeof rootRoute
    }
    '/mock/daily-orders-detail': {
      id: '/mock/daily-orders-detail'
      path: '/mock/daily-orders-detail'
      fullPath: '/mock/daily-orders-detail'
      preLoaderRoute: typeof MockDailyOrdersDetailImport
      parentRoute: typeof rootRoute
    }
    '/mock/order-entry': {
      id: '/mock/order-entry'
      path: '/mock/order-entry'
      fullPath: '/mock/order-entry'
      preLoaderRoute: typeof MockOrderEntryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/mock/daily-orders': typeof MockDailyOrdersRoute
  '/mock/daily-orders-detail': typeof MockDailyOrdersDetailRoute
  '/mock/order-entry': typeof MockOrderEntryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/mock/daily-orders': typeof MockDailyOrdersRoute
  '/mock/daily-orders-detail': typeof MockDailyOrdersDetailRoute
  '/mock/order-entry': typeof MockOrderEntryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/mock/daily-orders': typeof MockDailyOrdersRoute
  '/mock/daily-orders-detail': typeof MockDailyOrdersDetailRoute
  '/mock/order-entry': typeof MockOrderEntryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/mock/daily-orders'
    | '/mock/daily-orders-detail'
    | '/mock/order-entry'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/mock/daily-orders'
    | '/mock/daily-orders-detail'
    | '/mock/order-entry'
  id:
    | '__root__'
    | '/'
    | '/mock/daily-orders'
    | '/mock/daily-orders-detail'
    | '/mock/order-entry'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MockDailyOrdersRoute: typeof MockDailyOrdersRoute
  MockDailyOrdersDetailRoute: typeof MockDailyOrdersDetailRoute
  MockOrderEntryRoute: typeof MockOrderEntryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MockDailyOrdersRoute: MockDailyOrdersRoute,
  MockDailyOrdersDetailRoute: MockDailyOrdersDetailRoute,
  MockOrderEntryRoute: MockOrderEntryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/mock/daily-orders",
        "/mock/daily-orders-detail",
        "/mock/order-entry"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/mock/daily-orders": {
      "filePath": "mock/daily-orders.tsx"
    },
    "/mock/daily-orders-detail": {
      "filePath": "mock/daily-orders-detail.tsx"
    },
    "/mock/order-entry": {
      "filePath": "mock/order-entry.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
