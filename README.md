#  Vlog Post 1
---

## Q1: What are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` are used to describe the shape of an object. But they have key differences that matter in real-world projects:

---

### 1. First of all we talk about Extension and Merging:
-  `interface` supports **declaration merging**, meaning you can declare it multiple times and they’ll combine.
- `type` does **not** support declaration merging, but you can use intersections to combine types.

### 2.Then come Use Cases:
- `interface` is perfect when you r describing the structure of an object or class.
- `type` can do more — like define **unions, primitives, tuples, or functions**.

### 3. At last Readability and Style:
- Interfaces r cleaner and more expressive in OOP-style code.
- Types are more versatile in utility-heavy or complex type logic.

### Example:
```ts
interface User {
  name: string;
  age: number;
}

type Employee = {
  id: number;
  department: string;
};

interface Admin extends User {
  role: string;
}

type AdminEmployee = User & Employ

```

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

