# Vue State Management

## Overview

### What is Vuex

- State MGMT & Pattern Lib
- Most commonly sused with the Vue framework
- Similarities to Redux & Flux, but simpler
- Centralized data store for all components

### Why Use Vuex

- Components need to share state
- Single source of truth for state
- No need to pass events up and props down through many components
- Global state is "Reactive"

### How it Works

1. Actions talk to backend
2. Action commits a Mutation
3. Mutations mutate State
4. State is rendered to Vue Components
5. Vue Components dispatch Actions

### Terminology

State - App-level state/data (todos, posts, etc)
Getters - Get pieces of state or computed values from state
Actions - Called from components to commit a mutation
Mutation - Mutate the state (create, read, update, delete)
Modules - Each module can have its own state, getters, actions & mutations (posts module, auth module, etc.)

## Setup

`brew install yarn`: Install Yarn package manager via CLI (OSX)
`yarn global add @vue/cli`: Install Vue CLI globally.
`vue --version`: Check Vue CLI Version
`vue create vue-state-mgmt; cd vue-state-mgmt`: Bootstrap Vue Project.
`yarn add vuex axios`: Add Vuex for state mgmt and Axios for http requests.

## Commands

`yarn lint`: Lint all JS in `src`
`yarn serve`: Start the dev server @ `localhost:8080`.
`yarn build`: Build files for production in `dist`.