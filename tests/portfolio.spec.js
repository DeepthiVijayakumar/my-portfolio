import { test, expect } from '@playwright/test';

test.describe('Portfolio Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the hero section', async ({ page }) => {
        await expect(page).toHaveTitle(/Deepthi V S/);
        const nameHeading = page.locator('.name');
        await expect(nameHeading).toBeVisible();
        await expect(nameHeading).toContainText('Deepthi V S');

        const roleHeading = page.locator('.role');
        await expect(roleHeading).toBeVisible();
        await expect(roleHeading).toContainText('Automation Test Engineer');
    });

    test('should have a working resume download button', async ({ page }) => {
        const downloadPromise = page.waitForEvent('download');
        // Target the download link specifically
        const resumeLink = page.locator('a[download]');
        // If multiple exist (desktop/mobile), take the first visible one
        await resumeLink.first().click();
        const download = await downloadPromise;
        expect(download.suggestedFilename()).toBe('Deepthi_VS_Resume.pdf');
    });

    test('should display certifications', async ({ page }) => {
        const certSection = page.locator('#certifications');
        await certSection.scrollIntoViewIfNeeded();
        // Use heading role to be specific and avoid ambiguity
        await expect(page.getByRole('heading', { name: 'ServiceNow' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Microsoft Azure' })).toBeVisible();
    });
});
