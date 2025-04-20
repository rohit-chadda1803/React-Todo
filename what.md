1. create react project as usual . 

 - simply follow guide :- https://tailwindcss.com/docs/installation/using-vite

2 . to add tailwind also  ,run in terminal. 

```
npm install tailwindcss @tailwindcss/vite
```

3 . add lines in vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // added myself from doccumentation . 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // also added myself . 
    react()],
  
})


```
4.  in src/index.css added at top . 

```
@import "tailwindcss";

```



# uuid - 
- helps to create random ids  , search on web for its npm to install & copy -paste 

```
npm install uuid

in app.jsx
import { v4 as uuidv4 } from 'uuid';
uuidv4();
```
