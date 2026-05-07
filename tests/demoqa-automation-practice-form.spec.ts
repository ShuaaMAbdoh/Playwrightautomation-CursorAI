import { expect, test } from '@playwright/test';
import path from 'path';

test('DemoQA automation practice form - happy path', async ({ page }) => {
  await page.goto('/automation-practice-form');

  // Basic fields
  await page.getByPlaceholder('First Name').fill('Shuaa');
  await page.getByPlaceholder('Last Name').fill('Abdoh');
  await page.getByPlaceholder('name@example.com').fill('shuaa.abdoh@example.com');

  // Gender
  await page.getByText('Female', { exact: true }).click();

  // Mobile (required)
  await page.getByPlaceholder('Mobile Number').fill('5012345678');

  // Date of birth: set deterministically via input value
  const dob = page.locator('#dateOfBirthInput');
  await dob.click();
  await dob.fill('07 May 1995');
  await dob.press('Enter');

  // Subjects (autocomplete)
  const subjects = page.locator('#subjectsInput');
  await subjects.fill('Maths');
  await subjects.press('Enter');

  // Hobbies
  await page.getByText('Sports', { exact: true }).click();

  // Upload a tiny file
  const uploadPath = path.join(__dirname, 'fixtures', 'sample-upload.txt');
  await page.locator('#uploadPicture').setInputFiles(uploadPath);

  // Address + state/city (react-select)
  await page.getByPlaceholder('Current Address').fill('Riyadh, KSA');

  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator('#city').click();
  await page.getByText('Delhi', { exact: true }).click();

  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert submission modal
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Shuaa Abdoh' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'shuaa.abdoh@example.com' })).toBeVisible();
});

