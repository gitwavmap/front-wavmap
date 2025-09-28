/**
 * Validates password strength
 * Requirements: 8+ characters, letters, numbers, special characters
 */
export function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[a-zA-Z]/.test(password)) {
    errors.push('Password must contain at least one letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Real-time password strength indicator
 */
export function getPasswordStrength(password) {
  let score = 0;
  const checks = {
    length: password.length >= 8,
    letters: /[a-zA-Z]/.test(password),
    numbers: /\d/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    mixed: /[a-z]/.test(password) && /[A-Z]/.test(password)
  };

  Object.values(checks).forEach(check => {
    if (check) score++;
  });

  let strength = 'weak';
  if (score >= 4) strength = 'strong';
  else if (score >= 3) strength = 'medium';

  return {
    score,
    strength,
    checks
  };
}