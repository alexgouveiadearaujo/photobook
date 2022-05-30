import { FormGroup } from '@angular/forms';
export function usernamePasswordEqualsValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { passwordEqualUsername: true };
  } else {
    return null;
  }
}
