import { Page, Locator } from "@playwright/test";

// TODO: Update the URL when we upload the page to live server.

const URL = '/index.html';

export class MRZScannerPage {
  private page: Page;
  private dialogCloseButton: Locator;
  private startButton: Locator;

  private scanIDButton: Locator;
  private scanPassportButton: Locator;
  private scanBothButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.dialogCloseButton = this.page.locator("i.dls-license-icon-close");
    this.startButton = this.page.locator(".start-btn");

    this.scanIDButton = this.page.locator("#scan-id-btn");
    this.scanPassportButton = this.page.locator("#scan-passport-btn");
    this.scanBothButton = this.page.locator("#scan-both-btn");
  }

  async grantCameraPermission() {
    await this.page.addScriptTag({
      content: `
        navigator.mediaDevices.getUserMedia = async () => {
          return {
            getVideoTracks: () => [{
              applyConstraints: () => {},
              stop: () => {},
            }],
            getAudioTracks: () => [],
          };
        };
      `,
    });

    await this.page.setExtraHTTPHeaders({
      "sec-ch-ua": '"Chromium";v="91", " Not;A Brand";v="99"'
    });
  }

  /**
   * Close the license related dialog if it shows.
   */
  async closeDialogIfPresent() {
    // try {
    //   this.dialogCloseButton.waitFor({ state: "visible", timeout: 5000 });
    //   await this.dialogCloseButton.click();    
    // } catch (error) {
    //   console.log("Failed to close the dialog: ", error);
    // }

    await this.dialogCloseButton.click();    
  }

  async navigateTo() {
    // await this.grantCameraPermission();
    await this.page.goto(URL);
    await this.closeDialogIfPresent();
  }

  async getTitle() {
    return await this.page.title();
  }

  async getSelectedButton() {
    return await this.page.locator("button.scan-option-btn.selected");
  }

  async clickStartButton() {
    await this.startButton.click();
    
    // Ensuring the page is loaded after clicked on the Start button
    await this.page.waitForLoadState('networkidle', {timeout: 30000});
    await this.page.waitForLoadState('domcontentloaded', {timeout: 30000});
    console.log("Added extra long timeout for firefox to ensure firefox loads the page")
    await this.page.waitForTimeout(10000);

  }

  async clickscanIDButton() {
    await this.scanIDButton.click();
    await this.page.waitForTimeout(2000);
  }

  async clickscanPassportButton() {
    await this.scanPassportButton.click();
    await this.page.waitForTimeout(2000);
  }

  async clickScanBothButton() {
    await this.scanBothButton.click();
    await this.page.waitForTimeout(2000);
  }
  
}
