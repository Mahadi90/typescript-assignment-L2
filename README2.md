#  Vlog Post 2
---

# `keyof` in TypeScript

## What is `keyof`?

The `keyof` operator is a **type operator** that:
- Takes an object type as input
- Returns a **union type** of all its keys (property names)
- Works with interfaces, types, and even class shapes

## Example

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  
}

type UserKeys = keyof User;

