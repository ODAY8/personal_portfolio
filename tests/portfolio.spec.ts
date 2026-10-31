import { test, expect } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR =
  "C:\\Users\\KIIT\\.gemini\\antigravity\\brain\\c045502e-4092-4d6e-bec9-13a5b4834514";

test.describe("Mohamed Abdirahman — Personal Developer Portfolio QA", () => {
  test("renders updated positioning, Internship card, all 8 Certificates & Achievements, and updated projects with zero console errors", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });
    page.on("pageerror", (err) => {
      consoleErrors.push(err.message);
    });

    // 1. Desktop Viewport (1440x900)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("http://localhost:3105", { waitUntil: "networkidle" });

    // Check Title & SEO Metadata
    await expect(page).toHaveTitle(
      "Mohamed Abdirahman — Software Engineer & AI Developer"
    );

    // Check no horizontal overflow on Desktop
    const desktopOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(desktopOverflow).toBe(false);

    // Verify updated professional positioning: Software Engineer · AI Developer · Intern
    await expect(
      page
        .getByText("Software Engineer · AI Developer · Intern")
        .first()
    ).toBeVisible();

    await page.screenshot({
      path: path.join(ARTIFACT_DIR, "qa_desktop_hero_artwork.png"),
    });

    // Check About Section & Personal Portrait Image
    const aboutHeading = page.getByRole("heading", {
      name: /Curiosity drives me\. Engineering moves me\./i,
    });
    await aboutHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(aboutHeading).toBeVisible();
    const portraitImg = page.locator('#about img[alt="Portrait of Mohamed Abdirahman"]');
    await expect(portraitImg).toBeVisible();
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, "qa_desktop_about.png"),
    });

    // Check Section 01: Navigation
    const nav = page.locator("header nav#main-nav");
    await expect(nav).toBeVisible();
    for (const label of [
      "Home",
      "About",
      "Expertise",
      "Work",
      "Experience",
      "Certificates",
      "Contact",
    ]) {
      await expect(nav.getByRole("link", { name: label })).toBeVisible();
    }

    // Check Section 05: Selected Projects (including Food Rescue Donation Platform & EdgePilot AI updates)
    const workHeading = page.getByRole("heading", { name: /Selected work\./i });
    await workHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(workHeading).toBeVisible();

    for (const proj of [
      "EdgePilot AI",
      "EverKeep",
      "HandOver",
      "Food Rescue Donation Platform",
      "PhishGuard",
      "BiasMap",
      "MMS Student Companion",
    ]) {
      await expect(
        page.getByRole("heading", { name: proj, exact: true })
      ).toBeVisible();
    }

    // Check Section 06: Prominent Summer Internship 2026 Card & Experience Timeline
    const expHeading = page.getByRole("heading", {
      name: /The journey so far\./i,
    });
    await expHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(expHeading).toBeVisible();
    await expect(
      page.locator("#featured-internship-title")
    ).toHaveText("Summer Internship 2026");

    await page.screenshot({
      path: path.join(ARTIFACT_DIR, "qa_desktop_internship.png"),
    });

    // Test View Internship Certificate modal
    await page
      .getByRole("button", { name: /View Internship Certificate/i })
      .click();
    const certDialog = page.getByRole("dialog");
    await expect(certDialog).toBeVisible();
    await page
      .getByRole("button", { name: /Close certificate preview/i })
      .click();
    await expect(certDialog).toBeHidden();

    // Check Section 07: Certificates & Achievements (All 08 entries)
    const certHeading = page.getByRole("heading", {
      name: /Certificates & Achievements\./i,
    });
    await certHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(certHeading).toBeVisible();

    await page.screenshot({
      path: path.join(ARTIFACT_DIR, "qa_desktop_certificates.png"),
    });

    for (const certTitle of [
      "Flutter Foundation Certificate",
      "Cybersecurity Foundation Certificate",
      "Automatrix 2.0 — Agentic AI Certificate of Participation",
      "AI Infra Summit Hackathon 2026",
      "Meta Global AI Developer Hackathon 2026",
      "Summer Internship 2026",
      "Online Conference 333",
      "Low-Resource NLP: Techniques and Applications with LLMs",
    ]) {
      await expect(
        page.locator("#certificates").getByRole("heading", { name: certTitle })
      ).toBeVisible();
    }

    // Test View Certificate button in Certificates & Achievements section
    await page
      .locator("#certificates")
      .getByRole("button", { name: /View Certificate/i })
      .first()
      .click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page
      .getByRole("button", { name: /Close certificate preview/i })
      .click();
    await expect(page.getByRole("dialog")).toBeHidden();

    // 2. Tablet Viewport (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    const tabletOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(tabletOverflow).toBe(false);

    // 3. Mobile Viewport (390x844)
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(mobileOverflow).toBe(false);

    expect(consoleErrors).toEqual([]);
  });
});
