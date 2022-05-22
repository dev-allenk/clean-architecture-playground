export interface User {
  id: string;
  name: string;
  email: string;
  preferences: Ingredient[];
  allergies: Ingredient[];
}

export function hasAllergy(user: User, ingredient: Ingredient) {
  return user.allergies.includes(ingredient);
}
export function hasPreference(user: User, ingredient: Ingredient) {
  return user.preferences.includes(ingredient);
}
